import React, { Component } from 'react'
import action from '../redux/actions.js'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
   
  }

 
  handleSubmit(){
    this.props.dispatch(action.addTodo(this._input.value));
  }


  render() {
    return (
      <div>
        <div>
          <Link to="/list">list視窗</Link>
        </div>
        <input
          type="text"
          placeholder="Type in your tode"
          ref={(c) => this._input = c}
        />
        <button onClick={()=>this.handleSubmit()}>加入</button>
      </div>
    )
  }

}


function  mapStateToProp(state){
	return state
}


export default connect(mapStateToProp)(TodoInput)


