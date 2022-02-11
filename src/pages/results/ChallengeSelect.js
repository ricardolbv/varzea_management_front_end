import React, { useState } from 'react';
import { connect } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';

import { updateGameState } from '../game/thunks';
import { MatchStatus } from './Constants';
import { useToken } from '../../auth/useToken';


const ChallengeSelect = (props) => {
    const [token, setToken] = useToken();

    const [resp, setResp] = useState({
        id: props.id_game,
        status: ''
    });

    function handleChangeSelect ({ target }) {
        setResp({
            ...resp,
            status: target.value
        });
    }

    const onSubmit = () => {
    // if(resp.aceite === 'Aceito')
    //    resp.resultado = 'Validando sumula'
    
        props.onUpdateGame(token, resp)
    }

    

    return(
        <>
        { props.estado == 0 ?
        <>
            <TextField label="Resposta" placeholder="Resposta" select style={{ width: '15vh' }}
                       onChange={handleChangeSelect}
                       value={resp.aceite}>
                <MenuItem key={1} name={'Aceito'} value={1}>Aceitar</MenuItem>
                <MenuItem key={2} name={'Recusado'} value={2}>Recusar</MenuItem>
                <MenuItem key={3} name={'Aguardando'} value={0}>Aguardando</MenuItem>
            </TextField>
            <Box p={1}>
                <Button variant='outlined' onClick={onSubmit}> Enviar</Button>
            </Box>
        </>
            : <div> {MatchStatus[props.estado]} </div>
        }
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    onUpdateGame: (token, state) => dispatch(updateGameState(token, state)),
})

export default connect(null, mapDispatchToProps)(ChallengeSelect)