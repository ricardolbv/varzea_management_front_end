import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { captain } from './pages/captain/reducers'

const reducers = {
    captain,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)