import React, { useState,useEffect } from 'react'
import Newscard from '../components/Newscard'

export default function Newscomp() {
    
    let [data, setdata] =useState([]);
    async function ne(){
        const dataa= await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f46396e98dc9464aac982d018005876e");
        const resdata=await dataa.json();
        setdata(resdata.articles)
    }

    useEffect(() => {
        ne();
    }, [])
    return (
        <div id="newcomp">
            {data.map((element) =>{
                return(
                    <Newscard title={element.title.slice(0,50)} desc={element.description.slice(0,100)} pic={element.urlToImage} key={element.title}  />
                )
            })}
        </div>
    )
}

