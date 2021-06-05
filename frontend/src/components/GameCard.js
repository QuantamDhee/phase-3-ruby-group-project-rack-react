import React from 'react'

class GameCard extends React.Component{
    render(){
        return(
            <div className='gamer'>
                <h4>{this.props.gamer.name}</h4>
                <img src={this.props.gamer.img} alt={this.props.gamer.name} className="gamer-img"/>
                <br/>
                {/* <button>player</button> */}
            </div>
        )
    }
}

export default GameCard