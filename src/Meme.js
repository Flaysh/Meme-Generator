import React from "react";

export default function Meme(props) {
  return (
    <div className="meme">
      <img src={props.memeUrl} alt="meme" className="img"></img>
    </div>
  );
}
