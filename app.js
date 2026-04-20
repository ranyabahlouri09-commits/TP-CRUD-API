const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tp_roles')
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use('/roles', require('./routes/roleRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.listen(3000, ()=> console.log("Server running on port 3000"));
