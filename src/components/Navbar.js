import React from 'react'


export default function Navbar() {
    // let [data, setdata] =useState([]);
    // let [rdata, setrdata] =useState("");
    async function ne(){
        let readData="",i;
        const dataa= await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f46396e98dc9464aac982d018005876e");
        const resdata=await dataa.json();
        // setdata(resdata.articles)
        for(i=0;i<10;i++){
             readData= readData + " . " + resdata.articles[i].title;
        }
        console.log(readData)
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
                <button onClick={ne()}>Top 10 News</button>
            </nav>
            
        </div>
    )
}
