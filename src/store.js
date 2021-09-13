import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { captain } from './pages/captain/reducers'
import { toast } from './common/reducers'

const reducers = {
    captain,
    toast,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)