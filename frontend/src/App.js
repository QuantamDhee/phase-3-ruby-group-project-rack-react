import React from 'react'
import logo from './logo.svg';
import './App.css';

import PlayerCollection from './components/PlayerCollection'


const url = "http://localhost:9393/players"

class App extends React.Component{

  state = {
    players: [],
    games: [],
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(playerData => {
      this.setState({
        players: playerData.players
      })
    })
  }



  render(){
    return (
      <>
      <PlayerCollection playerData={this.state.players}/>
      </>
    )
  }
}

export default App;
