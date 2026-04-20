const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

router.get('/', async (req,res)=>{
  const users = await User.find().populate('role');
  res.json(users);
});

module.exports = router;
