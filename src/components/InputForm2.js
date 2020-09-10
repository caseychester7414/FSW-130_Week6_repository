import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/actions'



class InputForm2 extends Component{

state={
    show:{
      title:''
    }
  }

handleChange = e =>{
  e.preventDefault()
const newTitle = {...this.state.show, title: e.target.value}
this.setState({show: newTitle})
}

handleSubmit = e =>{
  e.preventDefault()
  console.log(this.state.show)
  this.props.dispatch(actions.addShow(this.state.show))
}

render(){
  return(

    <div>
     
        <form className='input' onSubmit={this.handleSubmit}>
            <input
            type='text'
            name='title'
            placeholder='Enter Title here'
            value={this.state.show.title}
            onChange={this.handleChange}
            />
            <button>Enter</button>
        </form>
        <h2>Binge Worthy Shows</h2>
        {this.props.show.map(show =>(
           <ul className='list'>
           <li className='list-item' key={show.title}>{show.title}</li>
        </ul>
        ))}

       
    </div>
 )

}
     

}

const mapStateToProps = (state)=>{
  console.log(state.show)
  return{  
      show: state.show
  }
  
}
export default connect(mapStateToProps)(InputForm2)