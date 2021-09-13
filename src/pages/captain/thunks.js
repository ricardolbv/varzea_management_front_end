import axios from 'axios';
import {
    createCaptain,
} from './actions';

import { openToast } from '../../common/actions';

export const newCaptain = (captain) => async (dispatch) => {
    try {
        const _captain = {
            ...captain,
            numero: parseInt(captain.numero)
        }

        await axios.post('http://127.0.0.1:8000/equipe/capitao/', _captain);
        dispatch(openToast({open: true, status: 'success', message:"Capitão cadastrado com sucesso!"}));
        dispatch(createCaptain(_captain));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar capitão "+ error}));
    }
} 