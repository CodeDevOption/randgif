import React from 'react'
import FiltGif from './components/FiltGif'
import RandGif from './components/RandGif'

import './App.css';
const App = () => {
  return (
    <div className='GifApp'>
        <RandGif />
        <FiltGif />
    </div>
  )
}

export default App