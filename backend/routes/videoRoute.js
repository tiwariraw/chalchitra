import express from 'express';
import multer from 'multer'; // handles multipart form data
import Ffmpeg from 'fluent-ffmpeg'; // for video processing
import path from 'path'; // for file path manipulation (inbuilt)
import Video from '../models/Video.js';

const videoRouter = express.Router();

// Task: store these files in s3 bucket 
const upload = multer({
    dest: 'uploads/', // destination folder,
})

videoRouter.post('/upload', upload.single('video'), async (req, res) => {
    try {

        const inputPath = req.file.path;
        const outputPath = `${process.env.VIDEO_STORAGE_PATH}/${req.file.filename}.m3u8`;
        Ffmpeg(inputPath)
            .output(outputPath)
            .on('end', async () => {
                const newVideo = new Video({
                    title: req.body.title,
                    url: outputPath,
                });

                await newVideo.save();
                res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
            })
            .on('error', (error) => {
                res.status(500).json({ error: error.message });
            })
            .run();
    } catch (error) {
        res.status(500).json({ message: 'Error uploading video', error: error.message });
    }
});

export default videoRouter;