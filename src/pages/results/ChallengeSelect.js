import React, { useState } from 'react';
import { connect } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';

import { retrieveGames, getOpponents, updateGameState } from '../game/thunks';


const ChallengeSelect = (props) => {
    const [resp, setResp] = useState({
        aceite: '',
        resultado: ''
    });

    function handleChangeSelect ({ target }) {
        setResp({
            ...resp,
            aceite: target.value
        });
    }

    const onSubmit = () => {
        if(resp.aceite === 'Aceito')
            resp.resultado = 'Validando sumula'
    
        props.onUpdateGame(props.id_game, resp)
    }

    

    return(
        <>
        { props.estado === 'Aguardando'?
        <>
            <TextField label="Resposta" placeholder="Resposta" select style={{ width: '15vh' }}
                       onChange={handleChangeSelect}
                       value={resp.aceite}>
                <MenuItem key={1} name={'Aceito'} value={'Aceito'}>Aceitar</MenuItem>
                <MenuItem key={2} name={'Recusado'} value={'Recusado'}>Recusar</MenuItem>
                <MenuItem key={3} name={'Aguardando'} value={'Aguardando'}>Aguardando</MenuItem>
            </TextField>
            <Box p={1}>
                <Button variant='outlined' onClick={onSubmit}> Enviar</Button>
            </Box>
        </>
            : <div> {props.estado} </div>
        }
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    onUpdateGame: (id, state) => dispatch(updateGameState(id, state)),
})

export default connect(null, mapDispatchToProps)(ChallengeSelect)