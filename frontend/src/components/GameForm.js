// import React from 'react'

// export default class GameForm extends React.Component{
//     state = {
//         name: '',
//         img: '',
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.addGame(this.state)
//         this.setState({
//             name: '',
//             img: '',
//         })
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     // playerOptions = () =>{
//     //     return this.props.playerData.map(play => <option value={play.id} key={play.id}>{play.name}</option>)
//     // }

//     render(){
//         return(
//             <div>
//                 <h4>Add Gamez:</h4>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         {/* <select onChange={this.handleChange} name='player_id' className='player selection'>
//                             {this.playerOptions()}
//                         </select> */}
//                         <br/>
//                         <input type="text" name="name" placeholder="Enter a Game's name" value={this.state.name} onChange={this.handleChange} />
//                         <input type="text" name="img" placeholder="Enter a Game's image URL" value={this.state.img} onChange={this.handleChange} />
//                         <br />
//                         <input type="submit" name="submit" className="submit" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }