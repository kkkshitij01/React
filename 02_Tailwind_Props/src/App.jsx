import Card from './card'
import './App.css'

function App() {
let name = "Kshitij";
let education= {
  first: "First printed",
  second: "second printed",
}

let n2 = "something";
let ed2={
  first: "something",
  second: "another thing",
}
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello world</h1>
    <Card   name = {name} education = { education}/>
    <Card   name = {n2} education = { ed2}/>
    </>
  )
}

export default App
