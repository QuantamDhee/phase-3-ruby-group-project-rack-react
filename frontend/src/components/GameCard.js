import React from 'react'

class GameCard extends React.Component{

    // handleDelete = (e) => {
    //     this.props.deleteGame(this.props.gamer.id, e.target.parentNode)
    // }

    render(){
        return(
            <div className='gamer'>
                <h4>{this.props.game.name}</h4>
                <img src={this.props.game.img} alt={this.props.game.name} className="gamer-img"/>
                <br/>
                <button className='del-btn'> delete </button>
            </div>
        )
    }
}

export default GameCard