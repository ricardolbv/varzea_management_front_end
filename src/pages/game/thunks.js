import axios from '../../util/AxiosConfig';
import {
    getPossibleTeams,
    postGame,
    getGames,
    updateGame
} from './actions';

import { openToast } from '../../common/actions';

export const getOpponents = (token) => async (dispatch) => {
    try {
        const resp = await axios.get('Team/Opponents', { headers: { Authorization: `Bearer ${token}`}});
        dispatch(getPossibleTeams(resp.data.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao retornar equipes"+ error}));
    }
} 

export const createGame = (game, token) => async (dispatch) => {
    try {
        const resp = await axios.post('Match/', game, { headers: { Authorization: `Bearer ${token}`}});
        dispatch(postGame(resp.data.data))
        dispatch(openToast({open: true, status: 'success', message:"Partida criada com sucesso"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao criar jogo "+ error}));
    }
}

export const retrieveGames = token => async (dispatch) => {
    try {
        const resp = await axios.get('Match/GetAll', { headers: { Authorization: `Bearer ${token}`}});
        dispatch(getGames(resp.data.data))

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar partidas de equipe "}));
    }
}

export const updateGameState = (token, newState) => async (dispatch) => {
    try {
        const resp = await axios.put('Match/', newState, { headers: { Authorization: `Bearer ${token}`}});
        dispatch(updateGame(resp.data.data));
        dispatch(openToast({open: true, status: 'success', message:"Partida respondida com sucesso!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao atualizar partida "}));
    }
}