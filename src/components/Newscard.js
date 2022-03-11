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
        <div className="card">
            <img src={props.pic} alt=""/>
            <div className="content">
                <h3>{props.title}</h3>
                <h5>{props.desc}</h5>
                <ReadButton title={props.title} />
            </div>
            
        </div>
    )
}
