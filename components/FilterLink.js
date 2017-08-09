import React, { Component } from 'react'
import actions from '../redux/actions.js'
import store from '../redux/store'
import { connect } from 'react-redux'

const FilterTodo = actions.FilterTodo;

class FliterLink extends Component {

	render(){

	return (
  	<a href="#" onClick={e => {
				    e.preventDefault();
			    	this.props.FilterTodo(this.props.filter);				
			}}>
			{this.props.children}
		</a>
	 )	
	}
}

export default connect((state) => state ,{ FilterTodo })(FliterLink)
//第一個參數，等同為把等個store的state訂閱了，如果store發生改變則此元件也會更新
//如果改為(state) => state.apple  則只會訂閱有關store中apple的部分，只有store 的apple更新了才會更新組件

//第二個參數是把action 轉為可以dispatch出去的function，之後即可使用this.props.FilterTodo即個發出action
//或是可寫this.props.dispatch(FilterTodo(this.props.filter));
//如果connect第二個參數沒寫，則dispatch會加入到this.props中即可使用上行所述去發出action