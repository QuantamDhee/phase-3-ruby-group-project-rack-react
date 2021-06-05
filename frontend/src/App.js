import React from 'react'
import logo from './logo.svg';
import './App.css';

import GameCollection from './components/GameCollection'


const url = "http://localhost:9393/games"

class App extends React.Component{

  state = {
    players: [],
    games: [],
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(gameData => {
      this.setState({
        games: gameData.games
      })
    })
  }



  render(){
    return (
      <>
      <GameCollection gameData={this.state.games}/>
      </>
    )
  }
}

export default App;
