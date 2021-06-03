import React from 'react'

class CompCard extends React.Component{
    render(){
        return(
            <div className="card">
                <h2>{this.props.comp.name}</h2>
                <p>Prize money: ${this.props.comp.prize}</p>
            </div>
        )
    }
}

export default CompCard