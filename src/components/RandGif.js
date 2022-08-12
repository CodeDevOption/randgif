import React, { useEffect, useState } from 'react';
import './RandGif.css';
import axios from 'axios'

const RandGif = () => {
const API_KEY = process.env;
console.log(API_KEY);

  const [gifSrc,setGifsrc] = useState('');
  const fetchGif = async ()=>{
  const url = "https://api.giphy.com/v1/gifs/random?api_key=C2bFyExuKHsNk8uOVU0iZwGHixKs2phC";
  const {data} = await axios.get(url);
  console.log(data.data.images);
    setGifsrc(data.data.images.downsized_large.url);
// setGifsrc(data.)}
  }
  useEffect(()=>{
    fetchGif();
    },[]);
  return (
    <div className='randgif'>
      <h1>Random Gif</h1>
      <div className="img">
        <img src={gifSrc} alt="Random gif" />
      </div>
      <button onClick={()=> fetchGif()}>New</button>
    </div>
  )
}

export default RandGif