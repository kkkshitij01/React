import { useState } from 'react'
import './App.css'
function App() {

  const [color, setColor] = useState("pink");

  return (

    <div className="container" style={{ backgroundColor: color }}>
      <button className="bg-red-700 pt-2 pb-2 pl-4 pr-4 rounded-xl" onClick={() => { setColor("red") }}>Red</button><br /><br />
      <button className="bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-xl text-black" onClick={() => { setColor("green") }}>Green</button><br /><br />
    </div >
  )
}

export default App
