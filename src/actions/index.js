import { SELECT_STORE } from '../constants/action-types';

export function selectStore(payload) {
	return { type: SELECT_STORE, payload: payload }
}