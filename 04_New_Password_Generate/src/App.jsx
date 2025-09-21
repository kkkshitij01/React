import { useState, useCallback ,useEffect , useRef } from "react"
import './app.css'
function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_-{}[]=+"
    for(let i =1 ; i<= length;i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllow,charAllow , length])


  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    btnClick();
  },[password])


function btnClick(){
  document.querySelector(".btn").classList.add("bg-red-200");
  setTimeout(() => {
    document.querySelector(".btn").classList.remove("bg-red-200");
  }, 3000);
}


  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllow,charAllow , passwordGenerator])




  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
      <h1 className="text-white text-center text-bold text-xl py-5">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white text-gray-700"
        placeholder="password"
        readOnly
        ref={passwordRef}
         />
         <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 btn">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2 py-2">
        <div className="flex item-center gap-x-1">
          <input type="range" 
          min={8}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value )}}
          />
          <label >Length:{length}</label> 
        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={()=>{setNumberAllow((prev)=>!prev)}} />
          <label htmlFor="NumberInput">Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllow}
          id="numberInput"
          onChange={()=>{setCharAllow((prev)=>!prev)}} />
          <label htmlFor="NumberInput">Characters</label>
        </div>
      </div>
    </div>
  )

}
export default App
