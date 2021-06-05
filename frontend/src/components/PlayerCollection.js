import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerCollection = (props) => {

    return(
        <div id='player-collection'>
            {props.playerData.map(play => <PlayerCard play={play} key ={play.id}/>)}
        </div>
    )
}

export default PlayerCollection