import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount]=useState(15)
  // let count=15
  function add(){
    // count=count+1;
    setcount(count+1)
    console.log("No is increase",count)
  }

  function sub(){
    // count=count-1;
    setcount(count-1)
    console.log("No is increase",count)
  }


  return (
    <>
    <h2>count value {count}</h2>
    <button
    onClick={add}>AddNO {count}</button>
    <button
    onClick={sub}>ReduceNo {sub}</button>
    </>
  )
}

export default App
