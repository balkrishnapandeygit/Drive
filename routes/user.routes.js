// routes/user.routes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));

router.post(
  '/register',
  body('email').isEmail().trim(),
  body('password').trim().isLength({ min: 4, max: 80 }),
  body('username').notEmpty().trim().isLength({ min: 3, max: 15 }),
  body('company').trim().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message: 'Invalid data entered' });
    }

    try {
      const { username, email, password, company } = req.body;
      const existing = await userModel.findOne({ $or: [{ email }, { username }] });
      if (existing) return res.status(409).json({ message: 'User already exists' });

      const hashPassword = await bcrypt.hash(password, 10);
      await userModel.create({ username, email, password: hashPassword, company });

      res.redirect('/user/login');
    } catch (err) {
      console.error('Registration error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

router.post(
  '/login',
  body('username').trim().isLength({ min: 3, max: 15 }),
  body('password').trim().isLength({ min: 4, max: 80 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message: 'Invalid data entered' });
    }

    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({ username });
      if (!user) return res.status(400).json({ message: 'Invalid username or password' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

      const token = jwt.sign(
        { userId: user._id, email: user.email, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.redirect('/home');
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

module.exports = router;
