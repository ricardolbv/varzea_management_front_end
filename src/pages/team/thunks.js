import axios from 'axios';
import { 
    getAllPlayers, 
} 
from './actions';
import { openToast } from '../../common/actions';

export const fetchPlayers = (id) => async (dispatch, getState) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/equipe/time/'+id);
        console.log(resp.data.jogadores);
        dispatch(getAllPlayers(resp.data.jogadores))

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar capitão "+ error}));
    }
}

