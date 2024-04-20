import React, { useState } from 'react'
import "./RandomQuote.css"
const Randomquote = () => {

    let quotes=[]
     
   const loadQuotes= async()=>{
     const response=await fetch("https://type.fit/api/quotes");
     quotes=await response.json()
     console.log(quotes);

   }

   const random=()=>{
    const select=quotes[Math.floor(Math.random()*quotes.length)];
    setquote(select)

   }

    const [quote, setquote] = useState({
        text:"Hello World",
        author:"piyush"
    })

    const twitterX=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} -${quote.author.split(",")[0]}`)
    }
 loadQuotes()

  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">- {quote.author.split(",")[0]}</div>
            <div className="icons">
            <i className="fa-solid fa-rotate-right" onClick={()=>{random()}}></i>
            <i className="fa-brands fa-x-twitter" onClick={()=>{twitterX()}}></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Randomquote
