const express = require('express');
const router = express.Router();
const Role = require('../models/Role');

router.post('/', async (req,res)=>{
  const role = new Role(req.body);
  await role.save();
  res.status(201).json(role);
});

router.get('/', async (req,res)=>{
  const roles = await Role.find();
  res.json(roles);
});

module.exports = router;
