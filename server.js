// we need to require npm packages here is the express.js is been required/called from npm and added to variable express. 
const http = require('http');
const express = require('express');
const app = express();
const {animal} = require('./data/animal.json');

app.get('/api/animals', (req,res)=>{
  res.send('Hello')
})

app.listen(3001);

