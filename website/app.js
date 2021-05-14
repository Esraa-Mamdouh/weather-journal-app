/* Global Variables */
const key = "dde3113fea23cd79b11cd0d9908ec7d8";
const zipCode=document.getElementById("zip").value;
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`;
projectData = {};

//let baseURL= `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = +d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log("here is "+newDate);

/*fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`)
.then(response => response.json())
.then(data => console.log(data));
*/

/* Function to POST data */
const postData = async (url='',data={})=>{
    const response = await fetch(url,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    })
}

//create object e will send in postData function
//TODO
function createDataObjet(){
//1. temp (from GET ApI)
//2. date
projectData.date = newDate;
//3.user response (from UI)
}

/*
const getWeather = async (url="")=>{
    const res = fetch(url);
    console.log(res);
}
getWeather(url);
*/