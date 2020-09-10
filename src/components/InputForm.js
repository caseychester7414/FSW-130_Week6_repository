import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/actions'



class InputForm extends Component{

state={
    movie:{
      title:''
    }
  }


handleChange = e =>{
  e.preventDefault()
const newTitle = {...this.state.movie, title: e.target.value}
this.setState({movie: newTitle})
}

handleSubmit = e =>{
  e.preventDefault()
  console.log(this.state.movie)
  this.props.dispatch(actions.addMovie(this.state.movie))
}

render(){
  return(

    <div>
        <form className='input' onSubmit={this.handleSubmit}>
            <input
            type='text'
            name='title'
            placeholder='Enter Title here'
            value={this.state.movie.title}
            onChange={this.handleChange}
            />
            <button>Enter</button>
        </form>
        <h2>Binge Worthy Movies</h2>
        {this.props.movie.map(movie =>(
          <ul className='list'>
             <li className='list-item' key={movie.title}>{movie.title}</li>
          </ul>
            
        ))}
        
    </div>
 )

}
}
 
const mapStateToProps = (state)=>{
  console.log(state.movie)
  return{
      movie: state.movie,

  }
  
}


// const mapDispatchToProps ={
//     add: addUser,
//     delete: removeUser
// }
export default connect(mapStateToProps, )(InputForm)


