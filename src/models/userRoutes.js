// // routes/userRoutes.js
// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/signup', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.status(201).json({ success: true, message: "User registered successfully!" });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Error registering new user." });
//     }
// });

// module.exports = router;
