import React from 'react'
import {useState} from 'react'
import {Home} from './components/index'
import './App.css'


function App() {
  const [sessionValide ,setSessionValide] = useState(()=>{
    const storedConnectValide = sessionStorage.getItem('connectValide') === 'true'
    return storedConnectValide ? storedConnectValide : false;
  });
  const [connectValide, setConnectValide] = useState(()=>{
    const storedConnectValide = localStorage.getItem('connectValide') === 'true'
    return storedConnectValide ? storedConnectValide : false;
  });
  const [userConnected,setUserConnected] = useState(()=>{
    const storedUserConnected = JSON.parse(localStorage.getItem('userConnected'));
    return storedUserConnected ? storedUserConnected : '';
  })
  return (
    <div className='home'>
      <Home  setSessionValide={setSessionValide} setConnectValide={setConnectValide}/>
    </div>  
  )
}

export default App