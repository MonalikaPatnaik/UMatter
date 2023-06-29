const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const yup = require('yup');

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    phone: yup.string().max(10).min(10).required(),
  });
  

router.post('/signup', async (req, res) => {
    try {
      const { email, password ,fullName ,phone } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
 
      const user = new User({
        email,
        password: hashedPassword,
        fullName,
        phone,
      });

      schema.validate(user)
        .then(async validatedData => {
            await user.save();
            const token = jwt.sign({ email }, 'your_secret_key');
      
            res.status(201).json({ token });
        })
        .catch(validationError => {
            res.status(500).json({ message: 'Validation Error' });
        });
     
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ email }, 'your_secret_key');
  
      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;