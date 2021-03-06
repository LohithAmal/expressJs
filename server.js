// we need to require npm packages here is the express.js is been required/called from npm and added to variable express. 
const fs = require('fs');
const path = require('path');
const express = require('express');

const {animals} = require('./data/animal.json');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
function filterByQuery(query, animalsArray) {
  let personalityTraitsArray = [];
  // Note that we save the animalsArray as filteredResults here:
  let filteredResults = animalsArray;
  if (query.personalityTraits) {
    // Save personalityTraits as a dedicated array.
    // If personalityTraits is a string, place it into a new array and save.
    if (typeof query.personalityTraits === 'string') {
      personalityTraitsArray = [query.personalityTraits];
    } else {
      personalityTraitsArray = query.personalityTraits;
    }
    // Loop through each trait in the personalityTraits array:
    personalityTraitsArray.forEach(trait => {
      // Check the trait against each animal in the filteredResults array.
      // Remember, it is initially a copy of the animalsArray,
      // but here we're updating it for each trait in the .forEach() loop.
      // For each trait being targeted by the filter, the filteredResults
      // array will then contain only the entries that contain the trait,
      // so at the end we'll have an array of animals that have every one 
      // of the traits when the .forEach() loop is finished.
      filteredResults = filteredResults.filter(
        animal => animal.personalityTraits.indexOf(trait) !== -1
      );
    });
  }
  if (query.diet) {
    filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
  }
  if (query.species) {
    filteredResults = filteredResults.filter(animal => animal.species === query.species);
  }
  if (query.name) {
    filteredResults = filteredResults.filter(animal => animal.name === query.name);
  }
  // return the filtered results:
  return filteredResults;
}

function findById(id, animalArray){
  const result = animalArray.filter(animal => animal.id === id)[0];
  return result;
}

app.get('/api/animals', (req,res)=> {
  let results = animals;
  if (req.query){
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});
// vALIDATE DATA FUNCTION
function validateAnimal(animal){
  if(!animal.name || typeof animal.name !== 'string'){
    return false;
  }
  if(!animal.species || typeof animal.species !== 'string'){
    return false;
  }
  if(!animal.diet || typeof animal.diet  !== 'string'){
    return false;
  }
  if (!animal.personalityTraits ||  !Array.isArray(animal.personalityTraits)){
    return false;
  }
  return true;
}

// create animal function

function createNewAnimal(body, animalsArray){
 
  // our function main code
    const animal = body;
    animalsArray.push(animal);
    fs.writeFileSync(
      path.join(__dirname, './data/animal.json'),
      JSON.stringify({animals: animalsArray}, null, 2)
    );
  // return finished code to post route for response

  return animal;
}
app.post('/api/animals',(req,res)=>{
  // set the id based on what rthe next index of array will be
  req.body.id= animals.length.toString();
// if any data in req.body is incorrect, send 400 error back
if(!validateAnimal(req.body)){
  res.status(400).send('the animal is not properly formatted.');
}else{
  const animal = createNewAnimal(req.body, animals);

  res.json(animal);
} 
});
app.get('/api/animals/: id', (req,res)=> {
  const result = findById(req.params.id, animals);
  if(result){9
    res.json(result);
  } else {
    res.send(404);
  } 
});

app.post('/api/animals',(req, res)=> {
  // req.body where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});;

