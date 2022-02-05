import axios from '../../util/AxiosConfig';
import {
    updateTime,
    getTime,
} from './actions';


import { openToast } from '../../common/actions';

export const updateTeam = (team, token) => async (dispatch) => {
    try {
        const _team = {
            "name": team.nome,
            "modality": team.modalidade,
            "viceCaptain": team.vice_capitao,
            "gameDay": team.data
        }

        const resp = await axios.put('Team/Update', _team, { headers: { Authorization: `Bearer ${token}`}});
        dispatch(openToast({open: true, status: 'success', message:"Equipe editada com sucesso!"}));
        dispatch(updateTime(resp.data.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao editar Equipe "+ error}));
    }
} 

export const getTeam = (token) => async (dispatch) => {
    try {
        const resp = await axios.get('Team/MyTeam',{ headers: { Authorization: `Bearer ${token}`}});
        dispatch(getTime(resp.data.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao retornar equipe"+ error}));
    }
} 