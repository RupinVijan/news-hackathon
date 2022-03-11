import React,{useState} from 'react'
import "./css/weather.css";


function Weather() {
  function to_cel(x){
    return((x-273.15).toPrecision(4))
  }
  const [city , setcity ] = useState("Delhi");
  const apiCall = async() => {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5ea48567760b12859fe7fa46e3abb151";
    const det= await fetch(apiUrl);
    const respdata= await det.json();
    if(!respdata.cod){
      window.alert(respdata.message)
    }
    else{
      document.querySelector(".temp").innerText= to_cel(respdata["main"]["temp_max"]) + " C" ;
    document.querySelector(".humidity").innerText= "Humidity:" +respdata["main"]["humidity"] + "%" ;
    document.querySelector(".wind").innerText= "Wind Speed:" +respdata["wind"]["speed"] + "km/hr" ;
    document.querySelector(".description").innerText= respdata["weather"][0]["main"] ;
  }

  }
  return (
    <>
     <div class="card">
    <div class="search">
      <input type="text" class="search-bar" placeholder="Search" value={city} onChange={(e)=>{
        setcity(e.currentTarget.value)
      }} />
      <button onClick = {apiCall}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
    </div>
    <div class="weather ">
      <h2 class="city">Weather in {city}</h2>
      <h1 class="temp"></h1>
      <div class="flex">
        <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
        <div class="description"></div>
      </div>
      <div class="humidity"></div>
      <div class="wind"></div>
    </div>
  </div>
    </>

  )
}

export default Weather