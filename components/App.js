import React, { Component } from 'react';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       {this.props.children} {/*用來顯示中間的東西， 例如:<Todo>我是中間的東西</Todo>*/}
      </div>
    )
  }

}
function  mapStateToProp(state){
	return state
}


export default connect(mapStateToProp)(App)
