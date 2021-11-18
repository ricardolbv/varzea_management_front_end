import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { LOGOUT } from './pages/home/actions';

import { players } from './pages/team/reducers'
import { captain } from './pages/captain/reducers'
import { toast } from './common/reducers'
import { team } from './pages/home/reducers';
import { opponents, games } from './pages/game/reducers';
import { summary, awayPlayers, homePlayers } from './pages/results/reducers';
 
const reducers = {
    captain,
    toast,
    players,
    team,
    opponents,
    games,
    summary,
    awayPlayers,
    homePlayers,
}

const appReducer = (state, action) => {

    switch (action.type) {
        case  LOGOUT:
            return rootReducer(undefined, action)
        default:
            return rootReducer(state, action)
    }
};


const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore (
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
)