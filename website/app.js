/* Global Variables */
let zipCode;
const key = "dde3113fea23cd79b11cd0d9908ec7d8";
let baseUrl ;
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
      body: JSON.stringify(data)
    })
}

//create object e will send in postData function
//TODO
/*function createDataObjet(){
//1. temp (from GET ApI)
//2. date
projectData.date = newDate;
//3.user response (from UI)
}*/


/* Function to GET Web API Data*/
//TODO: three parameters (base, zip,key)
const getWeatherData= async(url='')=>{
    const response = await fetch(url);
    try{
    const data= await response.json();
    //const data= response;
    //console.log("222responseee= "+data)
    console.log(data);
    //TODO return response.json();
    console.log(data.main.temp);
    return data.main.temp;}
    catch(error){
        console.log("error= "+error);
    }
}

/* Function to GET Project Data */
const getServerData=async(url='')=>{
    const response = await fetch(url);
    try{
        const data =await response.json();
    document.getElementById("date").innerHTML=data.date;
    document.getElementById("temp").innerHTML=data.temp;
    document.getElementById("content").innerHTML=data.content;
    } 
    catch(error){
        console.log("error= "+error);
    }
}

/* Function called by event listener */
// master function
function generateListner(){
    console.log("inside function");
    const btn=document.getElementById("generate");
    btn.addEventListener("click",(event)=>{
        console.log("inside button");
    //TODO: CHECK VALIDATION(empty string and entered numvber)
    //get the value of zip code
    event.preventDefault();
    console.log("zip= "+document.getElementById("zip").value)
    zipCode=document.getElementById("zip").value;
    baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`;
    //get value of feeling and set it to object
    projectData.content= document.getElementById("feelings").value;
    //get date value 
    projectData.date = newDate;
    //get the value of temp from GET 
    console.log("11111111projectData.content= "+projectData.content+"projectData.date= "+newDate+"zip=  "+zipCode+"url= "+baseUrl);
    projectData.temp =getWeatherData(baseUrl)
//.then( //TODO: Add .then
        //console.log("3333333projectData.content= "+projectData.content+"projectData.date= "+newDate+"zip=  "+zipCode,"temp= "+projectData.temp)
    //);
    .then(console.log("3333333projectData.content= "+projectData.content+"projectData.date= "+newDate+"zip=  "+zipCode,"temp= "+projectData.temp) )
    postData('/saveData', projectData)
    .then(getServerData('/updateUI'))
    })
}

generateListner();
/*
const getWeather = async (url="")=>{
    const res = fetch(url);
    console.log(res);
}
getWeather(url);
*/