import React from 'react'

class GameCard extends React.Component{

    // handleDelete = (e) => {
    //     this.props.deleteGame(this.props.gamer.id, e.target.parentNode)
    // }

    render(){
        return(
            <div className='gamer'>
                <h5>{this.props.game.name}</h5>
                <img src={this.props.game.img} alt={this.props.game.name} className="gamer-img"/>
                <br/>
                <button onClick={()=> this.props.deleteGame(this.props.game)} className='del-btn'> delete </button>
            </div>
        )
    }
}

export default GameCard