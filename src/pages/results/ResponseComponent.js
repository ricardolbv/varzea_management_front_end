import React, { useState } from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux'

import { updateSumula } from './thunks'

function ResponseComponent (props){
    const handleCancel = () => props.onUpdateSummary({ status: 'recusado' }, props.summary.id)
    const handleAccept = () => props.onUpdateSummary({ status: 'aceito' }, props.summary.id)

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

const mapStateToProps = (state) => ({
    summary: state.summary
})

const mapDispatchToProps = dispatch => ({
    onUpdateSummary: (fields, id) => dispatch(updateSumula(fields, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResponseComponent)