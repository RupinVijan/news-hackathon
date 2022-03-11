import React, { useState,useEffect } from 'react'
import Newscard from '../components/Newscard'

export default function Newscomp() {
    
    let [data, setdata] =useState([]);
    async function ne(){
        const dataa= await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0c34f30a18834d88b138420e473a2320");
        const resdata=await dataa.json();
        setdata(resdata.articles)
    }

    useEffect(() => {
        ne();
    }, [])
    return (
        <div class="container" style={{backgroundColor:'white'}}>
            {data.map((element) =>{
                return(
                    <Newscard title={element.title} desc={element.description} url={element.url} pic={element.urlToImage} key={element.title}  />
                )
            })}
        </div>
    )
}

