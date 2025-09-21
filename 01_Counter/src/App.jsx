import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);


  function addVal(){
    setCounter(prevCounter =>{
      let val = prevCounter+1;
      if( val>20){
       return 20;
      }
       return val;
    });

  }

  function decVal(){
    setCounter(prevCounter => {
      let val = prevCounter -1;
      if( val <0){
        val = 0; 
      }
      return val;
    });
  }
  return (
    <> 
    <h1>chai or react</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addVal}>Make It : {counter+1}</button>
    <br />
    <br />
    <button onClick={decVal}>Make It : {counter-1}</button>
    </>
  )
}

export default App
