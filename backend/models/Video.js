import mongoose from "mongoose";

// designing the schema for the video model
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    // link to the video file in the storage (cloud(s3 in AWS) or local)
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// creation of User model
const Video = mongoose.model('Video', videoSchema);

export default Video;