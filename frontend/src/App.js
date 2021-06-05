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
    newGame: '',
    newImg: '',
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

  addGame = (e) =>{
    e.preventDefault()
    fetch(url, {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({
        name: this.state.newGame,
        img: this.state.newImg,
        player: this.state.choosePlayer
      })
    })
    .then(r => r.json())
    .then(data => {
      this.setState({
        games: [...this.state.games, data.game],
        newGame: '',
        newImg: ''
      })
    })
  }
  
  clickPlayer = (e) => {
    e.target.innerText === 'ALL' ?
    this.setState({displayPlayer: ''}) :
    this.setState({displayPlayer: e.target.innerText})
  }

  deleteGame = (deleter) => {

    fetch('http://localhost:9393/games/' + deleter.id, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setState({
      games: this.state.games.filter(game => game !== deleter)
    })
}

 


  render(){

    console.log(this.state.games)
    let filterGame = this.state.games.filter(game => game.player.includes(this.state.displayPlayer))

    return (
      <>
      <div>
        <h2> Players: </h2>
        {PLAYERS.map((player, i) => <button onClick={this.clickPlayer} key={i}>{player}</button>)}
      </div>
      <div>
        <h3>Gamez: </h3>
        <form>
          <div>
          <input onChange={(e) => this.setState({newGame: e.target.value})} placeholder="Enter Game's Name" type="text" value={this.state.newGame}></input>
          <br/>
          <input onChange={(e) => this.setState({newImg: e.target.value})} placeholder="Enter Game's IMG" type="text" value={this.state.newImg}></input>
          <br/>
          <select onChange={(e) => this.setState({choosePlayer: e.target.value})}>
            <option>Johndhee</option>
            <option>BaldBoi</option>
            <option>Pekora</option>
            <option>Zues</option>
            <option>Fubuki</option>
          </select>
          <br/>
          <input onClick={this.addGame} type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
      {filterGame.map((game, i ) => <GameCard deleteGame={this.deleteGame} game={game} key={i}  />)}
      </>
    )
  }
}

export default App;
