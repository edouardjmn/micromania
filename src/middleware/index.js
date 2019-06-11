import { SELECT_STORE, FOUND_DUPLICATE_STORE } from "../constants/action-types";
import store from '../store/index';

export function singleSelectionMiddleware({ dispatch }) {
	return function(next) {
		return function(action) {
			switch (action.type) {
				case SELECT_STORE:
					const foundStore = store.getState().stores.filter(
						store => {
								return(action.payload.id == store.id)
							}

					)

					if (foundStore.length) {
						console.log('This stores was already selected! :(')
						return dispatch( { type: FOUND_DUPLICATE_STORE } )
					}
			}

			return next(action);
		}
	}
}