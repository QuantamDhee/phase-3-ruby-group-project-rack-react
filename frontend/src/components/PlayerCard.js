import React from 'react'

class PlayerCard extends React.Component{
    render(){
        return(
            <div className='player'>
                <h4>{this.props.play.name}</h4>
                <img src={this.props.play.img} alt={this.props.play.name} className="play-img"/>
                <br/>
                <button>gamez</button>
            </div>
        )
    }
}

export default PlayerCard