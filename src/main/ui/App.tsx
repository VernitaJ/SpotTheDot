import React, { useEffect, useState, useReducer, Component } from "react";
import "./App.css";
import Game from './Game.tsx'
import audio from './fail.mp3';

class App extends React.Component {
  state = { 
    start : false,
    explode: false
  }

  explode = () => {
    this.setState({start : false})
    this.setState({explode: true})
    new Audio(audio).play();
    setTimeout(() => this.setState({explode: false}), 3000)
  }
  
  startGame = () => {
    this.setState({start : true})
  }

  render(){
  return (
    <div className="App">
      {this.state.explode ? <div className="death"></div> : 
        <div>
          {this.state.start ? <Game explode={this.explode}/> : <div className="start-screen">
            <iframe src="https://giphy.com/embed/gFhZjOtzoutSvckWPM" className="start-background"/>
            <button className="start-button" onClick={this.startGame}>Start the game</button></div> }
    
        </div>
  }
    </div>
  );
}
}

export default App;
