import axios from '../../util/AxiosConfig';
import {
    getSummary,
    updateSummary,
    getPlayersAway,
    getPlayersHome,
    createGoalAway,
    createGoalHome,
    createCardAway,
    createCardHome,
    getGoalsFromMatchHome,
    getGoalsFromMatchAway,
    getCardsFromMatchHome,
    getCardsFromMatchAway,

} from './actions';

import { openToast } from '../../common/actions';

export const loadSumula = (id_partida) => async (dispatch) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/api/sumula/'+id_partida+'/partida');
        dispatch(openToast({open: true, status: 'success', message:"Sumula carregada com sucesso!"}));
        dispatch(getSummary(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar sumula "+ error}));
    }
} 

export const updateSumula = (fields, token) => async (dispatch) => {
    try {
        console.log(fields)
        const resp = await axios.put('Match/', fields, { headers: { Authorization: `Bearer ${token}`}});
        dispatch(openToast({open: true, status: 'success', message:"Sumula enviada com sucesso!"}));
        dispatch(updateSummary(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao atualizar sumula "+ error}));
    }
}

export const loadPlayersAway = (id_time, token) => async (dispatch) => {
    try {
        const resp = await axios.get('Team/'+id_time, { headers: { Authorization: `Bearer ${token}`}});
        dispatch(getPlayersAway(resp.data.data.players));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar Jogadores visitantes "+ error}));
    }
} 

export const loadPlayersHome = (id_time, token) => async (dispatch) => {
    try {
        const resp = await axios.get('Team/'+id_time, { headers: { Authorization: `Bearer ${token}`}});
        dispatch(getPlayersHome(resp.data.data.players));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar Jogadores mandantes "+ error}));
    }
}

export const createGoal = (gol, token) => async (dispatch) => {
    try {
        var body = { quantity: parseInt(gol.qtd), playerId: gol.autor, goalStatus: gol.time, matchId: gol.matchId }
        const resp = await axios.post('Goal/', body, { headers: { Authorization: `Bearer ${token}`}});
        
        gol.type === 'home'? dispatch(createGoalHome(body)) : dispatch(createGoalAway(body));

        dispatch(openToast({open: true, status: 'success', message:"Gol registrado com sucesso!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar gol"+ error}));
    }
}

export const createCard = (cartao, token) => async (dispatch) => {
    try {
        const resp = await axios.post('Card/', { cardType: cartao.tipo, playerId: cartao.jogador, matchId: cartao.time, cardStatus: cartao.status },
                                     { headers: { Authorization: `Bearer ${token}`}});
        
        cartao.type === 'home'? dispatch(createCardHome(cartao)) : dispatch(createCardAway(cartao));

        dispatch(openToast({open: true, status: 'success', message:"Cartão registrado com sucesso!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar cartão"+ error}));
    }
}

export const loadGoalsFromMatch = (id_partida) => async (dispatch) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/api/gol/partida/'+id_partida);
        dispatch(getGoalsFromMatchHome(resp.data.homeGoalsPlayers));
        dispatch(getGoalsFromMatchAway(resp.data.awayGoalsPlayers));
        dispatch(getCardsFromMatchAway(resp.data.awayCards));
        dispatch(getCardsFromMatchHome(resp.data.homeCards));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar gols de partida "+ error}));
    }
} 


