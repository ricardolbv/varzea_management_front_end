import axios from 'axios';
import {
    getSummary,
    updateSummary,
    getPlayersAway,
    getPlayersHome,
    createGoalAway,
    createGoalHome,
    createCardAway,
    createCardHome,
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

export const updateSumula = (fields, id_sumula) => async (dispatch) => {
    try {
        const resp = await axios.put('http://127.0.0.1:8000/api/sumula/update/'+id_sumula, fields);
        dispatch(openToast({open: true, status: 'success', message:"Sumula enviada com sucesso!"}));
        dispatch(updateSummary(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao atualizar sumula "+ error}));
    }
}

export const loadPlayersAway = (id_time) => async (dispatch) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/api/time/'+id_time);
        dispatch(getPlayersAway(resp.data.jogadores));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar Jogadores visitantes "+ error}));
    }
} 

export const loadPlayersHome = (id_time) => async (dispatch) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/api/time/'+id_time);
        dispatch(getPlayersHome(resp.data.jogadores));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao carregar Jogadores mandantes "+ error}));
    }
}

export const createGoal = (id_sumula, gol) => async (dispatch) => {
    try {
        const resp = await axios.post('http://127.0.0.1:8000/api/gol/create/sumula/'+id_sumula, { quantidade: parseInt(gol.qtd), autor: gol.autor });
        
        gol.time === 'Home'? dispatch(createGoalHome(gol)) : dispatch(createGoalAway(gol));

        dispatch(openToast({open: true, status: 'success', message:"Gol registrado com sucesso!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar gol"+ error}));
    }
}

export const createCard = (id_sumula, cartao) => async (dispatch) => {
    try {
        const resp = await axios.post('http://127.0.0.1:8000/api/cartao/create/sumula/'+id_sumula, { tipo: cartao.tipo, jogador: cartao.jogador });
        
        cartao.time === 'Home'? dispatch(createCardHome(cartao)) : dispatch(createCardAway(cartao));

        dispatch(openToast({open: true, status: 'success', message:"Cartão registrado com sucesso!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar cartão"+ error}));
    }
}


