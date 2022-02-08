import axios from '../../util/AxiosConfig';
import { 
    getAllPlayers, 
    createPlayer,
    excludePlayer,
    updatePlayer,
} 
from './actions';
import { openToast } from '../../common/actions';

export const fetchPlayers = (token) => async (dispatch) => {
    try {
        const resp = await axios.get('Player/AllPlayers', { headers: { Authorization: `Bearer ${token}`}});
        dispatch(getAllPlayers(resp.data.data))

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message:"Erro ao cadastrar capitão "+ error}));
    }
}

export const newPlayer = (player, token) => async (dispatch) => {
    try {
        const _player = {
            "name": player.nome,
            "position": player.posicao,
        }

        const resp = await axios.post('Player', _player, { headers: { Authorization: `Bearer ${token}`}}); 

        dispatch(openToast({open: true, status: 'success', message:"Jogador criado com sucesso!"}));
        dispatch(createPlayer(resp.data));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: 'Erro de comunicação. Endpoint: /retail/create'}))
    }
}

export const deletePlayer = (id, token) => async (dispatch) => {
    try {
        await axios.delete('Player/'+id, { headers: { Authorization: `Bearer ${token}`}});

        dispatch(excludePlayer(id))
        dispatch(openToast({open: true, status: 'success', message: "Jogador deletado!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: "Erro ao deletar jogador "+ error}));
    }
}

export const changePlayer = (player, token) => async (dispatch, getState) => {
    try {
        const _pl = {
            "id": player.id,
            "name": player.nome,
            "position": player.posicao
        }

        await axios.put('Player/', _pl, { headers: { Authorization: `Bearer ${token}`}});

        dispatch(updatePlayer(player.id))
        dispatch(openToast({open: true, status: 'success', message: "Jogador editado!"}));

    } catch (error) {
        dispatch(openToast({open: true, status: 'error', message: "Erro ao editar jogador "+ error}));
    }
}

