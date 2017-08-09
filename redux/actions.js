import axios from 'axios';

const updateUserActivity = (data) => {
	return({
		type: 'UPDATE_USER_ACTIVITY',
		data
	})
}

let actions = {
	addTodo: (text) => {
		return ({
			type: 'ADD_TODO',
			text
		})
	},
	toggleTodo: (id) => {
		return ({
			type: 'TOGGLE_TODO',
			id
		})
	},
	FilterTodo: (filter) => {
		return ({
			type: 'SET_VISBILITY_FILTER',
			filter
		})
	},

	updateUserActivity,

	con: () => {
		return (dispatch, getState) => {
			axios.get('https://gist.githubusercontent.com/nunomluz/d01defb4b5cae3d40658d465e15640e2/raw/738bf5c86b9976d266871147992d4ed9bb4b6d14/data.json')
				.then(d => {
					if (typeof d.data) {
						console.log(d.data)
						dispatch(updateUserActivity(d.data));
					}
				})
		}
	}

}

export default actions

