import React from 'react'

export default function Newscard(props) {
    return (
        <div>

            <div class="card-news">
        <div class="card-news_image">
        <img src={props.pic} alt=""/>
            </div>
        <h2> {props.title} </h2>
        <p> {props.desc}</p>
        <a href={props.url}><button>READ MORE</button> </a>
        <button > LISTEN  </button>
    </div>
            
        </div>
    )
}
