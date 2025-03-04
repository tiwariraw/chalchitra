import mongoose from "mongoose";

// designing the schema for the user model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// creation of User model
const User = mongoose.model('User', userSchema);

export default User;