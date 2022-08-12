import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './FiltGif.css'
const FiltGif = () => {
  const [gif,setgif] = useState('Hi');
  const [gifSrc,setGifsrc] = useState('');
  const fetchGif = async ()=>{
  const url = `https://api.giphy.com/v1/gifs/random?api_key=C2bFyExuKHsNk8uOVU0iZwGHixKs2phC&tag=${gif}`;
  const {data} = await axios.get(url);
  console.log(data);
  setGifsrc(data.data.images.downsized_large.url);
}
useEffect(()=>{
  fetchGif();
},[]);
  return (
    <div className='filtgif'>
    <h1>Filter & Random Gif</h1>
    <div className="img">
      <img src={gifSrc} alt="" />
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
    <input value={gif} type="text" onChange={(e) => setgif(e.target.value)} />
    <br />
    <button onClick={()=> fetchGif()}>New {gif} Gif</button>

    </div>
  </div>
  )
}

export default FiltGif