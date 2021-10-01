import axios from 'axios';
import { 
    getAllPlayers, 
    createPlayer,
    excludePlayer,
    updatePlayer,
} 
from './actions';
import { openToast } from '../../common/actions';

export const fetchPlayers = (id) => async (dispatch, getState) => {
    try {
        const resp = await axios.get('http://127.0.0.1:8000/api/time/'+id);
        console.log(resp.data.jogadores);
        dispatch(getAllPlayers(resp.data.jogadores))

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar capitão "+ error}));
    }
}

export const newPlayer = (player, id) => async (dispatch) => {
    try {
        const resp = await axios.post('http://127.0.0.1:8000/api/capitao/'+id+'/time/jogador', 
        player)

        dispatch(openToast({open: true, status: 'success', message:"Jogador criado com sucesso!"}));
        dispatch(createPlayer(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /retail/create'}))
    }
}

export const deletePlayer = (id) => async (dispatch, getState) => {
    try {
        await axios.delete('http://127.0.0.1:8000/api/jogador/delete/'+id);

        dispatch(excludePlayer(id))
        dispatch(openToast({open: true, status: 'success', message: "Jogador deletado!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: "Erro ao deletar jogador "+ error}));
    }
}

export const changePlayer = (player) => async (dispatch, getState) => {
    try {
        await axios.put('http://127.0.0.1:8000/api/jogador/update/'+player.id, player);

        dispatch(updatePlayer(player.id))
        dispatch(openToast({open: true, status: 'success', message: "Jogador editado!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: "Erro ao editar jogador "+ error}));
    }
}

