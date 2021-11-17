import React from 'react'
import { connect } from 'react-redux'
import { Typography, Grid, Box } from '@material-ui/core'
import Button from '@material-ui/core/button';

import useTeam from '../../hooks/useTeam'

export const GoalsFromGame = (props) => {
    var idOponente =  props.team.id === props.game.times[0] ? props.game.times[1] : props.game.times[0];
    var timeOponente  = useTeam(idOponente);

    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='center'>
                    <Typography variant='h6'> {props.summaryPerson === 'Mandante' ? props.team.nome : timeOponente.nome} x {props.summaryPerson === 'Visitante'? props.team.nome : timeOponente.nome} </Typography> 
                </Box>
                <Box display='flex' justifyContent='center'>
                    <Typography variant='h1'> 0 x 0 </Typography> 
                </Box>
            </Grid>
            <Grid item xs={1}/>
        </Grid>    
    )
}

const mapStateToProps = (state) => ({
    team: state.team,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsFromGame)
