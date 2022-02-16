import React, { useState } from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useToken } from '../../auth/useToken';

import { updateSumula } from './thunks'

function ResponseComponent (props){
    const history = useHistory();
    const [token, setToken] = useToken();

    const handleCancel = () => {
        props.onUpdateSummary({ id: props.gameId, status: 2 }, token)
        history.push('/home/results')
    }

    const handleAccept = () => {
        props.onUpdateSummary({ id: props.gameId, status: 4 }, token)
        history.push('/home/results')
    }

    return (
    <Grid container spacing={1}>
        <Grid item xs={1}/>
        <Grid item xs={10}>
            <Box display='flex' justifyContent='center'>
                <Button variant='contained' onClick={handleAccept}> Aceitar </Button>
                <Button variant='contained' onClick={handleCancel}> Declinar </Button>
            </Box>
        </Grid>
        <Grid item xs={1}/>
    </Grid>
    )
}


const mapDispatchToProps = dispatch => ({
    onUpdateSummary: (fields, token) => dispatch(updateSumula(fields, token))
})

export default connect(null, mapDispatchToProps)(ResponseComponent)