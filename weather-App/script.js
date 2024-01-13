const wrapper = document.querySelector(".wrapper");
let inputPart = document.querySelector(".input-part");
let infoText = document.querySelector(".info-text");
let inputField = document.querySelector("input")
let getLocationBtn = document.querySelector("button")
let arrowBack = wrapper.querySelector("header i")
let weatherIcon = document.querySelector(".weather-part img")

let api = "https://home.openweathermap.org/";
var apiKey = "d1c5c9f543044c9ca2fa98e0947ee9b9";

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetchWeatherData(); 

}
function fetchWeatherData() {
    infoText.innerText="Getting weather info..."
    infoText.classList.add("pending")
    fetch(api).then(response => response.json())
    .then(result => weatherDetails(result)) 
}

function weatherDetails(info){
    infoText.classList.replace("pending", "error") 
    if(info.cod == "404"){
        infoText.innerText = `You entered ${inputField.value}, which isn't a valid city` 
    } else {
          
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const{feels_like,humidity, temp} = info.main;

        wrapper.querySelector(".temp, .numb").innerText = Math.floor(temp); 
        wrapper.querySelector(".weather").innerHTML = description;
        wrapper.querySelector(".location span").innerHTML = `${city}, ${country}`
        wrapper.querySelector(".temp .numb-2").innerHTML = Math.floor(feels_like);
        wrapper.querySelector(".humidity span").innerHTML = `${humidity}%`
       infoText.classList.remove("pending", "error"); 
        wrapper.classList.add("active") 
    }
}

getLocationBtn.addEventListener("click", ()=>{
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Browser doesn't support geolocation Api");
    }
})
function onSuccess(position){
    const {latitude, longitude} = position.coords; 
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

    fetchWeatherData();
}
getLocationBtn.addEventListener("click", ()=>{
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Browser doesn't support geolocation api");
    }
})
function onError(error){
  infoText.innerText = error.message; 
  infoText.classList.add("error");
}
inputField.addEventListener("keyup", e=>{
    if(e.key == "Enter" && inputField.value !=""){
        requestApi(inputField.value);
    }
})

arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})