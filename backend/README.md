# ChalchitraGPT Backend

## Tech Stack
- express: main backend framework
- cors: cross origin resource sharing to allow next.js to talk to backend
- dotenv: environment variable management
- mongoose: ODM for MongoDB
- jsonwebtoken: secure authentication
- bcryptjs: for password hashing
- multer: for file uploads (for videos)
- ffmpeg or fluent-ffmpeg: video transcoding for HLS streaming
- stripe: payment processing
- nodemailer: email service
- bullmq: background job processing

## Dependencies Installed
- npm init -y
- npm i express
- npm i dotenv
- npm i cors
- npm i mongoose
- npm i jwt
- npm i bcryptjs
- npm i multer
- npm i ffmpeg
- npm i stripe
- npm i nodemailer
- npm i bullmq