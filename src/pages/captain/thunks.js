import axios from 'axios';
import {
    createCaptain,
} from './actions';

export const newCaptain = (captain) => async (dispatch) => {
    try {
        const _captain = {
            ...captain,
            numero: parseInt(captain.numero)
        }

        await axios.post('http://127.0.0.1:8000/equipe/capitao/', _captain);
        alert("Capitão criado com sucesso");
        dispatch(createCaptain(_captain));

    } catch (error) {
        alert("Erro ao criar capitão: "+ error);
    }
} 