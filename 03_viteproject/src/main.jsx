
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement2 = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click here to Visit!!!'
)
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

createRoot(document.getElementById('root')).render(
  // works beacuse the syntex is on react based
  // reactElement2
  <h1>Dogs are more loyal than ....</h1>
)
