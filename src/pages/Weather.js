import React,{useState} from 'react'

function Weather() {

  const [city , setcity ] = useState("Delhi");
  const apiCall = async() => {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5ea48567760b12859fe7fa46e3abb151";
    const det= await fetch(apiUrl);
    const respdata= await det.json();
    console.log(respdata)
  }
  return (
    <>
<button onClick = {apiCall}> click here</button>
    </>
  )
}

export default Weather