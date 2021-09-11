# EXPRESS JS

* This module will explain how to create your own server side API using EXPRESS J.S framework.
* EXPRESS allow quick and easy API route & associated HTTP request methods.
* Routing is how we handle server response whenc client makes a request.

## Brief about SERVER

*  A server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients". 

### client server side relation deoicts in the image below

![](images/client-server-relation.JPG)

## What we learn from this project 

* how to handle client request
* returning responses
* how to handle errors
* what happens when a user submit a web form

![](images/full-stack.JPG)

# zoo keepr
* this module will create a web server using Express.js and add it to the front end that a local zoo developing
* we will deploy this site to HEROKU-a clound application platform that allow you to deploy application with servers to a webpage.

## project Brief
### our local zoo is moving to the cloud. They want to move there filing cabinet data to cloud digital information management. This allow Zoo managemnt to work more effectively and also allow educational details to public online.

## To Do List for the ZOO kepr

* create front end: HTML and CSS
* create a data base
* create back end: handle data management

![](images/express.JPG)

## tools needed
* Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is considered the de facto standard server framework for Node.js.

* Insomnia Core is a powerful REST API client that allows us to test APIs and make client-side server requests without having to use a browser.

* Heroku https://www.heroku.com/  is a cloud application platform that enables developers to build, run, and operate applications entirely in the cloud. Unlike GitHub pages, which only allows you to deploy static sites with HTML pages, Heroku allows you to deploy a server.js file that will run the Node.js process. You’ll also use the Heroku CLI https://devcenter.heroku.com/articles/heroku-cli, which will help you deploy apps easily without leaving the command line.

## lesson objective
 ### By this project we will learn how to do the followings,
 * setup and run a Node.js web server using Express.js
 * handle two types of GET request using parameters
 * make the application production-ready and deploy it on Heroku.

 ![](images/front-end.JPG)

 ## project steps depicted below

  ![](images/steps.JPG)

  # start project 

  ## add github issue

  ## issue 1 - Create a web server

  * As a user, I can request for a list of all animal data

  * As a user, I can request data for just one animal based on its id value

  * As a user, I want to be able to do this from anywhere and not just my computer


 ## issue 2 - Allow user creation of data

 *  As a user, I want to be able to add a new animal to the catalog

## issue 3 - Implement Front End

* As a user, I want to be able to view data from the server in a front-end web application

* As a user, I want to create new data by submitting an HTML form

## issue 4 - Incorporate a seperate dataset

* As a user, I want to be able to access and create different types of data stored on the server

# create project files

* A json data from the zoo is stored in the folder **[animal.json](data/animal.json)**.

* Created root project directory **[server.js](server.js)**.

#  Working of Express.js and why we are using it on our project

* Whenever we need to retrive a data from an API, we would make a request to an endpoint and wait until we get get the response back from server to client. Express follow the same pattern.
* Node.js application are not considered as a servers. To be considered as sever, a machine/program needs to provide some functionality to a client. in our case, we want that functionality to be accepting a request and send back a response.
* Node.js servers require significant more code that using Express.js 

# installing node and dependencies 

* **npm init** - ask preliminary details about our project and create a own json file.
* **npm i express --save** - will install express.js to our project **--save** will add the dependency as development dependency.


#  zoo keepr starts here

* we need to require the npm package express on our **[server.js](server.js)**
* also we assign **express()** to the **app** variable so that we can chain on methods to express.js server later.
* a **[listen(port)](https://expressjs.com/en/api.html#app.listen)** method is added at the end to run code on specified port.
* to run server **npm start** on terminal.

## what is a **port**?

* port gives website address an exact location/destination on the host.
* most common ports are **80 (http://)** sites and **443 (https://)**.
* port with number **1024** and under are considered by special operating system, and often need permission to use(like running the process as an administrator).
* to avoid the these permission restriction we choose to run ports with less restriction such as any between **1024** and **49151!** can be used, but we choose number **3000**   because it is common practice and easy to remember.

## Handle request for animal

* create a route that the front end can request data from.
  ````
  const { animals } = require('./data/animals');
  
  
 **[Listenport:3001](http://localhost:3000/api/animals)**

* followed by
  ```
  app.get('/api/animals', (req, res) => {
  res.send('Hello!');});

* there is two important things from the code above:
1. the **get()** method require two arguments.
    - a string that will describe the route the client will have to fetch from.
    - is a callback function that will execute everytime that route is accesed by a **GET** request.

2. we are using the **send()** method from the **res** parameter(short for response) to send the string "Heloo!" to client. [more information on res method](https://expressjs.com/en/api.html#res).

