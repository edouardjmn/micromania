import { SELECT_STORE, REMOVE_STORE } from '../constants/action-types'

const initialState = {
	stores: []
}

function rootReducers(state = initialState, action) {
	switch(action.type) {
		case SELECT_STORE:
			return Object.assign({}, state, {
				stores: state.stores.concat(action.payload)
			})
		case REMOVE_STORE:
			return Object.assign({}, state, {
				stores: state.stores.filter((store) => store.id !== action.payload.id)
			})
		default:
			return state;
	}
}

export default rootReducers