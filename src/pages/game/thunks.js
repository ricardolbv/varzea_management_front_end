import axios from 'axios';
import {
    getPossibleTeams,
} from './actions';

import { openToast } from '../../common/actions';

export const getOpponents = (id) => async (dispatch) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/api/time/times-dispo/'+id);
        dispatch(getPossibleTeams(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao retornar equipes"+ error}));
    }
} 