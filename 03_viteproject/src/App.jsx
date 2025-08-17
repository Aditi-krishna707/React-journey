import { createElement } from "react"
import React from "react"
function Myapp() {
  return (
    <div>Function on same page ! </div>
  )
}


const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Click to open GOOGLE</a>
)



function App() {
  return (
    // Myapp()
    // <Myapp/>

// not working
// kyuki apne hisab se syntex diye hai
    // <reactElement />

    // works
    anotherElement
    
  )
}

export default App
