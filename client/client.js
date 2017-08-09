import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import store from '../redux/store'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'
import Dashboard from '../components/Dashboard/'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
     <Router history={history}>
      <Route path="/" component={App}>
         <Route path="/dashboard" component={Dashboard}/>
         <Route path="/list" component={TodoList}/>
         <Route path="/add" component={TodoInput}/>
      </Route>
    </Router> 
  </Provider>,
  document.getElementById('app')
)
