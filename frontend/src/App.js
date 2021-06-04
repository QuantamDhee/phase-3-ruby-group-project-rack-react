import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import CompContainer from './components/CompContainer'
import CompForm from './components/CompForm'

const Url = 'http://localhost:9393/competitions'

class App extends React.Component {

  state = {
    games: [],
    competitions: [],
    players: []
  }

  componentDidMount(){
    fetch(Url)
    .then(res => res.json())
    .then(compData => {
      this.setState({
        competitions: compData.competitions
      })
    })
  }

  addComp = (cData) =>{
    const {name, prize} = cData
    const newComp ={
      name,
      prize: parseInt(prize)
    }
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newComp)
    }
    fetch(Url, configObj)
    .then(r => r.json())
    .then(data =>{
      this.setState({
       competitions: [...this.state.competitions, data.competition]
      })
    })
  }

  render(){
  return (
    <>
      {/* <Header/> */}
      <CompForm addComp={this.addComp}/>
      <CompContainer compData={this.state.competitions}/>
    </>
  )
  }
}

export default App;
