import axios from 'axios';
import {
    getSummary,
    updateSummary,
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