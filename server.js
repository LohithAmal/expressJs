// we need to require npm packages here is the express.js is been required/called from npm and added to variable express. 
const express = require('express');

const app = express();


app.listen(3001),()=>{
  console.log("this server now on port 3001");
}

