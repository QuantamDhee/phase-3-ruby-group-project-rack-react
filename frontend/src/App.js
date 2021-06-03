import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import CompContainer from './components/CompContainer'

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

  render(){
  return (
    <>
      {/* <Header/> */}
      <CompContainer compData={this.state.competitions}/>
    </>
  )
  }
}

export default App;
