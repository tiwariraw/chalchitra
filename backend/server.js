import express from 'express'; // express framework for creating api routes
import cors from 'cors'; // middleware to allow cross origin requests
import dotenv from 'dotenv'; // load environment variables from .env file
import mongoose from 'mongoose'; // MongoDB ODM to interact with MongoDB database
import authRouter from './routes/authRoute.js';
import videoRouter from './routes/videoRoute.js';

dotenv.config(); // load environment variables from .env file

const app = express(); // initialize express app
const PORT = process.env.PORT || 5000; // set port number from environment variable or 5000

// Middleware
app.use(cors()); // enabling cors to allow next.js frontend to communicate with backend
app.use(express.json()); // parse incoming request body as json

// Connect to MongoDB atlas using the uri from environment variable
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // new url parser (the mongodb node.js v4+ deprecated the old connection string). enabling useNewUrlParser to true ensures mongoose uses the new url parser
    useUnifiedTopology: true, // uses the new connection management service for stability in network topology (eg. srv (service) records)
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/auth', authRouter); 
app.use('/api/video', videoRouter); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});