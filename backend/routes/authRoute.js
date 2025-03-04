import express from 'express';
import bcrypt from 'bcryptjs'; // hash password for storing in DB
import jwt from 'jsonwebtoken'; // generate jwt token for authentication
import User from '../models/User.js'; // user model

const authRouter = express.Router(); // create a new express router

// register user api (/api/auth/register)
authRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body; // extract user details from request body

        // check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // hash password for security
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user instance
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save(); // save user to database

        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// login user api (/api/auth/login)
authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid user credentials' });
        }

        // compare provided password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // generate jwt token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRY });
        res.json({ token, user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default authRouter;