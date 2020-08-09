import React, { useState } from "react";
import Input from "./Input";

function Welcome() {

  const [headingText, setHeadingText] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText('Hello World!');
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className = "container">
      <h1>{headingText}</h1>
      <Input type="text" placeholder="What's your name?"/>
      <button 
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        onClick={handleClick} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default Welcome;