
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// const reactElement2 = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   'Click here to Visit!!!'
// )
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// createRoot(document.getElementById('root')).render(
  
//     <>
//     <App />
//     </>
  
// )


import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App.jsx"


const vari="jai shree Rammmxkc"
// Not recommended (manual object creation), but works if you wrap in React
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank"
  },
  "Click me to visit google",
  vari
)

createRoot(document.getElementById("root")).render(
  <>
    <App />
    reactElement
  </>
)
