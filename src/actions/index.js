import { SELECT_STORE, REMOVE_STORE } from '../constants/action-types';

export function selectStore(payload) {
	return { type: SELECT_STORE, payload: payload }
}

export function removeStore(payload) {
	return { type: REMOVE_STORE, payload: payload }
}