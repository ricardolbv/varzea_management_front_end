import axios from 'axios';
import {
    createCaptain,
    loginCaptain,
} from './actions';

import { login } from '../home/actions';
import { openToast } from '../../common/actions';

export const newCaptain = (captain) => async (dispatch) => {
    try {
        /** Creates a Captain */
        const _captain = {
           "name": captain.nome,
           "email": captain.email,
           "password": captain.psw,
           "state": captain.estado,
           "tel": captain.telefone,
        }

        const resp = await axios.post('https://localhost:44320/User/Register', _captain);
        dispatch(openToast({open: true, status: 'success', message:"Capitão cadastrado com sucesso!"}));
        dispatch(createCaptain(resp.data.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar capitão "+ error}));
    }
} 

export const authCaptain = (captain) => async (dispatch) => {
    try {
        const resp = await axios.post('http://127.0.0.1:8000/api/auth', captain);
        dispatch(openToast({open: true, status: 'success', message:"Capitão logado com sucesso!"}));
        dispatch(loginCaptain(resp.data));
        dispatch(login(resp.data.time));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao logar com capitão "+ error}));
    }
} 