import React, { useEffect, useState, useReducer, Component } from "react";
import "./App.css";
import Game from './Game.tsx'
import audio from './assets/fail.mp3'
import User from "./UserInput.tsx"

interface User {
  id: number,
  username: string,
  lastScore: number,
  scores: number[]
}

class App extends React.Component {
  state = {
    start: false,
    explode: false,
    user: []
  }

  explode = () => {
    this.setState({ start: false })
    this.setState({ explode: true })
    new Audio(audio).play();
    setTimeout(() => this.setState({ explode: false }), 3000)
  }

  startGame = () => {
    this.setState({ start: true })
  }

  userAccess = (users: User[]) => {
    console.log("users received")
    this.setState({ user: users })
  }

  render() {
    return (
      <div className="App">
        {this.state.explode ? <div className="death"></div> :
          <div>
            {this.state.start ? <Game explode={this.explode} /> :
              <div>
                {this.state.user.length > 0 ? null : <User userAccess={this.userAccess} />}
                <button className="start-button" onClick={this.startGame}>Start the game</button>
              </div>}
          </div>
        }
      </div>
    );
  }
}

export default App;
