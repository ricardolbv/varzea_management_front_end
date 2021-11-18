import axios from 'axios';
import {
    getSummary,
    updateSummary,
    getPlayersAway,
    getPlayersHome,
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