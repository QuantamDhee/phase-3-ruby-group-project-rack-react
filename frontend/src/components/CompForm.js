import React, { Component } from 'react'

class CompForm extends Component{
    state = {
        name: '',
        prize: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComp(this.state)
        this.setState({
            name: '',
            prize: ''
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h3>Add Competition</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Enter a Competition's name" value={this.state.name} onChange={this.handleChange}/>
                        <input type="text" name="prize" placeholder="Enter Prize Pool" value={this.state.prize} onChange={this.handleChange}/>
                        <br/>
                        <input type="submit" name="submit" className="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CompForm