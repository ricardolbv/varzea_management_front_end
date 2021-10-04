import axios from 'axios';
import {
    updateTime,
    getTime,
} from './actions';


import { openToast } from '../../common/actions';

export const updateTeam = (team, id) => async (dispatch) => {
    try {

        const resp = await axios.put('http://127.0.0.1:8000/api/capitao/'+id+'/time', team);
        dispatch(openToast({open: true, status: 'success', message:"Equipe editada com sucesso!"}));
        dispatch(updateTime(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao editar Equipe "+ error}));
    }
} 

export const getTeam = (id) => async (dispatch) => {
    try {

        const resp = await axios.get('http://127.0.0.1:8000/api/time/'+id);
        dispatch(getTime(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao retornar equipe"+ error}));
    }
} 