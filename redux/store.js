import {applyMiddleware,compose,createStore} from "redux"
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let initialState = {
	visbility: 'SHOW_ALL',
	todos:[{
		id:0,
		completed: false,
		text:'initial for demo'
	}],
	userActivity: {}
}


let finalCreateStore = compose(
applyMiddleware(thunk,logger()),window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

function configureStore(initialState){
return finalCreateStore(reducer,initialState)

}

let store = configureStore(initialState)

export default store