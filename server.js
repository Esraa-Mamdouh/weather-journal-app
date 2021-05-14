// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser= require("body-parser");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})

//POST API& input data to server and save it inside projectData object 
app.post('/saveData',(req,res)=>{
    
    const data=req.body;
    //print body content
    console.log(data);
    projectData.temp= data.temp;
    projectData.date= data.date;
    projectData.content= data.content;
    //print projectData object content
    console.log("projectData= ");
    console.log(projectData);
    //TODO: send to app indication it was saved successfully?
})

//GET data in projectData object to update UI 
//app.get()