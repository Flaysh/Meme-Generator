import React from "react";
import './Buttons.css';


//TODO - Download link
export default function Buttons(props) {
  return (
    <div className="buttons">
      <button onClick={props.nextmeme} className="button1">Next Meme</button>
      <button href={props.memeUrl} className="button1" download>Download Meme</button> 
    </div>
  );
}
