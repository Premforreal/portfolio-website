import React, { useState, useEffect } from "react"
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import './index.css';

function App() {
  const [checked, setChecked] = useState(false);

  function onChangeSomeState(){
    setChecked(!checked);
  };


  return (
    <div >
      <NavBar checked={checked} onChangeSomeState={onChangeSomeState}/>
      <Home  checked={checked}/>
      <About  checked={checked}/>
      <Portfolio checked={checked}/>
      <Experience  checked={checked}/>
      <Contact  checked={checked}/>
    </div>
  );
}

export default App;
