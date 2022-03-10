import React from 'react'

export default function Newscard(props) {
    function readOut(message){
        const speech = new SpeechSynthesisUtterance('No warning should arise')
        speech.text = message ;
        speech.volume = 1;
        const allVoices = speechSynthesis.getVoices();
        speech.voice = allVoices[12];
        window.speechSynthesis.speak(speech)
    }
    return (
        <div className="card">
            <img src={props.pic} alt=""/>
            <div className="content">
                <h3>{props.title}</h3>
                <h5>{props.desc}</h5>
                <button >Listen</button>
            </div>
            
        </div>
    )
}
