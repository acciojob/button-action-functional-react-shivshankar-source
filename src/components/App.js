import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[ispara,setIspara] = useState(false);
  const handleclick = ()=>{
    setIspara(!ispara);
  }
  return (
    <div id="main">
      {ispara && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
      <button id="click" onClick={handleclick}>Click</button>
    </div>
  );
}


export default App;
