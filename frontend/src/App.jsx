import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
const[jokes, setJokes]=useState([]);

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data);
    // console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  })
},[])



  return (
    <>
      <div>
        <h1>FullStack</h1>
        <p>jokes: {jokes.length}</p>
       
       {jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
       ))}

      </div>
    </>
  )
}

export default App
