import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Meme from './Meme';
import Buttons from './Buttons';

export default class App extends Component {
  state = {
    memes: [],
    memeUrl: ''
  };

  componentDidMount() {
    axios.get(`https://api.imgflip.com/get_memes`).then(res => {
      this.setState({ memes: res.data.data.memes });
      this.setState({ memeUrl: this.state.memes[Math.floor(Math.random() * 101)].url });
       console.log(this.state.memes);
       console.log(this.state.memes[Math.floor(Math.random() * 101)].url);
     
    });
  }


  //todo - Fix the undefind problem
  nextMeme = () =>{
    if(this.state.memes[Math.floor(Math.random() * 101)].url !== undefined)
    this.setState({ memeUrl: this.state.memes[Math.floor(Math.random() * 101)].url });
  }

  render() {
    return (
      <div className="App">
        <h1>Empty Meme Generator</h1>
        <Meme memeUrl={this.state.memeUrl} />
        <Buttons nextmeme={this.nextMeme} memeUrl={this.state.memeUrl}/>
      </div>
    );
  }
}
