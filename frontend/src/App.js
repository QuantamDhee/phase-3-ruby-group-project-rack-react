import React from 'react'
import logo from './logo.svg';
import './App.css';

import GameCollection from './components/GameCollection'
import GameForm from './components/GameForm'
import { PLAYERS } from './player';
import GameCard from './components/GameCard'


const url = "http://localhost:9393/games"

class App extends React.Component{

  state = {
    displayPlayer: '',
    choosePlayer: 'Johndhee',
    games: [],
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(gameData => {
      this.setState({
        games: gameData.games,
        // players: gameData.players
      })
    })
  }

  addGame = (gaming) =>{
    const {name, img} = gaming
    const newGame ={
      name, 
      img,
    }
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newGame)
    }
    fetch(url, configObj)
    .then(r =>r.json())
    .then(data =>{
      this.setState({
        games: [...this.state.games, data.game]
      })
    })
  }
  
  clickPlayer = (e) => {
    e.target.innerText === 'ALL' ?
    this.setState({displayPlayer: ''}) :
    this.setState({displayPlayer: e.target.innerText})
  }

//   deleteGame = (deleter) => {

//     fetch('http://localhost:9393/games/' + deleter.id, {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//     this.setState({
//       games: this.state.games.filter(game => game !== deleter)
//     })
// }

 


  render(){

    console.log(this.state.games)
    let filterGame = this.state.games.filter(game => game.player.includes(this.state.displayPlayer))

    return (
      <>
      <div>
        <h2> Players: </h2>
        {PLAYERS.map((player, i) => <button onClick={this.clickPlayer} key={i}>{player}</button>)}
      </div>
      <GameForm playerData={this.state.players} addGame={this.addGame}/>
      {/* <GameCollection deleteGame={this.deleteGame} gameData={this.state.games}/> */}
      {filterGame.map((game, i ) => <GameCard game={game} key={i}  />)}
      </>
    )
  }
}

export default App;
