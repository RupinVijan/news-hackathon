import React,{useState} from 'react'
import "./css/weather.css";


function Weather() {

  const [city , setcity ] = useState("Delhi");
  const apiCall = async() => {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5ea48567760b12859fe7fa46e3abb151";
    const det= await fetch(apiUrl);
    const respdata= await det.json();
    document.getElementById("weather").innerText=respdata["name"];
    document.getElementById("temp").innerText= "WEATHER :: " +respdata["weather"][0]["description"];
    document.getElementById("maxmin").innerText= "TEMP TODAY :: " +respdata["main"]["temp"];

    document.getElementById("maxtemp").innerText= "MAX TEMP :: " +respdata["main"]["temp_max"];
    document.getElementById("minmax").innerText= "MIN TEMP :: " +respdata["main"]["temp_min"];

    document.getElementById("wind").innerText= "WIND TODAY:: " +respdata["wind"]["speed"] ;
    document.getElementById("clouds").innerText= "CLOUDS:: " +respdata["clouds"]["all"] ;

    console.log(respdata)
  }
  return (
    <>
{/* <button onClick = {apiCall}> click here</button> */}
    {/* <h1 id='weather'></h1>
    <h1 id='temp'></h1>
    <h1 id='maxmin'></h1>
    <h1 id='maxtemp'></h1>
    <h1 id='minmax'></h1>
    <h1 id='wind'></h1>
    <h1 id='clouds'></h1> */}
     <div class="card">
    <div class="search">
      <input type="text" class="search-bar" placeholder="Search"/>
      <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
    </div>
    <div class="weather loading">
      <h2 class="city">Weather in Denver</h2>
      <h1 class="temp">51°C</h1>
      <div class="flex">
        <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
        <div class="description">Cloudy</div>
      </div>
      <div class="humidity">Humidity: 60%</div>
      <div class="wind">Wind speed: 6.2 km/h</div>
    </div>
  </div>
    </>

  )
}

export default Weather