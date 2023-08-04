import { useState } from "react";
import React from "react";

function Toggle() {
  const [display, setDisplay] = useState(false)

  function toggle(){
    setDisplay(!display)
  }
  
  return <button style = {{background : display ? 'red' : 'white'}}onClick={toggle}> {display ? 'On' : 'Off'}</button>;
}

export default Toggle;
