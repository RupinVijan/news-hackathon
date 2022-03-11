import React from 'react'
function ReadButton(props){


    async function readOut(message){
        const speech = new SpeechSynthesisUtterance('No warning should arise')
        speech.text = message ;
        speech.volume = 1;
        const allVoices = speechSynthesis.getVoices();
        speech.voice = allVoices[12];
        await window.speechSynthesis.speak(speech);
        await window.speechSynthesis.cancel();
    }
    return(
        <button onClick={readOut(props.title)}>Listen</button>
    );

}

export default function Newscard(props) {
    return (
        <div>

            <div class="card-news">
        <div class="card-news_image">
        <img src={props.pic} alt=""/>
            </div>
        <h2> {props.title} </h2>
        <p> {props.desc}</p>
        <a href=""> READ MORE</a>
        <a href=""> LISTEN  </a>
    </div>
            
        </div>
    )
}
