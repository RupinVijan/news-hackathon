import React,{useEffect} from 'react'
import { Redirect } from 'react-router-dom';


export default function Navbar() {
    function responsive () {
  
            document.getElementById("menu-toggler").click(function() {
              toggleBodyClass("menu-active");
            });
          
            function toggleBodyClass(className) {
              document.body.classList.toggle(className);
            }
          
    }
    const topTen = async() => {
        let readData="",i;
        const dataa= await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0c34f30a18834d88b138420e473a2320");
        const resdata=await dataa.json();
        // setdata(resdata.articles)
        for(i=0;i<10;i++){
             readData= readData + " . " + resdata.articles[i].title;
        }
        console.log(readData)
        readOutt(readData)
    }
    const topTenSports = async() => {
        let readData="",i;
        const dataa= await fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=0c34f30a18834d88b138420e473a2320");
        const resdata=await dataa.json();
        // setdata(resdata.articles)
        for(i=0;i<10;i++){
             readData= readData + " . " + resdata.articles[i].title;
        }
        console.log(readData)
        readOutt(readData)
    }
    const topTenEnt = async() => {
        let readData="",i;
        const dataa= await fetch("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=0c34f30a18834d88b138420e473a2320");
        const resdata=await dataa.json();
        // setdata(resdata.articles)
        for(i=0;i<10;i++){
             readData= readData + " . " + resdata.articles[i].title;
        }
        console.log(readData)
        readOutt(readData)
    }
    const topTenPolitics = async() => {
        let readData="",i;
        const dataa= await fetch("https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=0c34f30a18834d88b138420e473a2320");
        const resdata=await dataa.json();
        // setdata(resdata.articles)
        for(i=0;i<10;i++){
             readData= readData + " . " + resdata.articles[i].title;
        }
        console.log(readData)
        readOutt(readData)
    }
    async function readOutt(message){
        const speech = new SpeechSynthesisUtterance('No warning should arise')
        speech.text = message ;
        speech.volume = 1;
        const allVoices = speechSynthesis.getVoices();
        speech.voice = allVoices[12];
        await window.speechSynthesis.speak(speech);
    }

    useEffect(() => {
        responsive();
    }, [])
    return (
        
        <div>
            <nav class="navbar">
  <div class="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/23/AS_sample_logo.png" alt="LOGO"/></div>
  <div class="push-left">
    <button id="menu-toggler" data-class="menu-active" class="hamburger">
      <span class="hamburger-line hamburger-line-top"></span>
      <span class="hamburger-line hamburger-line-middle"></span>
      <span class="hamburger-line hamburger-line-bottom"></span>
    </button>

    <ul id="primary-menu" class="menu nav-menu">
      <li class="menu-item current-menu-item"><button class="nav__link" ><a href="/">Home </a></button></li>
      <li class="menu-item current-menu-item"><button class="nav__link"  ><a href="/weather">Weather </a></button></li>
      <li class="menu-item dropdown"><button class="nav__link" onClick={topTen} >Top News</button>
         

      </li>
      <li class="menu-item dropdown"><button class="nav__link"  onClick={topTenSports} >Sports</button>
        
      </li>
      <li class="menu-item "><button class="nav__link" onClick={topTenEnt} >Entertainment</button>
      </li>
      <li class="menu-item "><button class="nav__link"  onClick={topTenPolitics} >Politics</button>
       
      </li>
    </ul>


  </div>
</nav>

            
        </div>
    )
}
