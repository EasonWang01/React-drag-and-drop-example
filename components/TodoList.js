import React, { Component } from 'react'
import action from '../redux/actions.js'
import FilterLink from './FilterLink.js'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';

class TodoList extends Component {

   constructor(props, context) {
    super(props, context)
 
  }

  liClick(a){
   
      this.props.dispatch(action.toggleTodo(a.id));

  }

   filtered() {
       
      switch(this.props.visbility){

      case "SHOW_ALL":
        return this.props.todos;

      case "SHOW_ACTIVE":
        return (this.props.todos).filter(function(state){
                    return state.completed === false
               });

      case "SHOW_COMPLETED":
        return (this.props.todos).filter(function(state){
                    return state.completed === true
               });
      default:
        return this.props.todos.todos;
      }
    };

  render() {

    return (
      <div>
       <Link to="/add">新增視窗</Link>
      <button onClick={() => this.props.dispatch(action.con())}  />
      <ul>
        {
          this.filtered().map((todo)=>{
            return <li key={todo.id} 
                       onClick={()=>this.liClick(todo)} 
                       style= {{textDecoration:todo.completed?'line-through':'none'}} >
                    {todo.text}  
                   </li>
          })
        }
      </ul>
      <p>
          {"Show: "}

          <FilterLink filter="SHOW_ALL" currentFilter={this.props.todos.visbility}>
         All
          </FilterLink>
          {"  ,  "}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={this.props.todos.visbility}>
         Active
          </FilterLink>
          {"  ,  "}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={this.props.todos.visbility}>
         Completed
          </FilterLink>

      </p>
      
      </div>
    )
  }

}

function  mapStateToProp(state){
	return state
}


export default connect(mapStateToProp)(TodoList)