import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from '../reducers/index';
import { singleSelectionMiddleware } from '../middleware/index';

// for redux dev tools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
		rootReducer,
		storeEnhancers(applyMiddleware(singleSelectionMiddleware))
	)

export default store;