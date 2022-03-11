import React from 'react'


export default function Navbar() {
    // let [data, setdata] =useState([]);
    // let [rdata, setrdata] =useState("");
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

    // useEffect(() => {
    //     ne();
    // }, [])
    return (
        
        <div>
            <div id="left">
                News Reg
            </div>
            <nav>
                <button onClick={topTen}>Top 10 News</button>
                <button onClick={topTenSports}>Top 10 Sports News</button>
                <button onClick={topTenEnt}>Top 10 Entertainment News</button>
                <button onClick={topTenPolitics}>Top 10 Politics News</button>
            </nav>
            
        </div>
    )
}
