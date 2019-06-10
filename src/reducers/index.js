import { SELECT_STORE } from '../constants/action-types'

const initialState = {
	stores: []
}

function rootReducers(state = initialState, action) {
	switch(action.type) {
		case SELECT_STORE:
			return Object.assign({}, state, {
				stores: state.stores.concat(action.payload)
			})
	}
}

export default rootReducers