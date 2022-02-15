import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { updateSumula } from './thunks'
import { useToken } from '../../auth/useToken';

export const SubmitSummary = (props) => {
    const [token, setToken] = useToken();
    const history = useHistory();

    const handleSubmit = () => {
        props.onUpdateSummary({id: props.game.id, status: 3}, token)
        history.push('/home/results')
    }

    return (
        <Box display='flex' justifyContent='flex-end' m={4}>
            <Button variant='contained' color="primary" style={{ backgroundColor: '#2F303A' }} onClick={handleSubmit}> Enviar Sumula </Button>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    onUpdateSummary: (fields, token) => dispatch(updateSumula(fields, token))
})

export default connect(null, mapDispatchToProps)(SubmitSummary)
