import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography, Grid, Box } from '@material-ui/core'

import { getOpponents } from '../game/thunks';

export const GoalsFromGame = (props) => {
    const idOponente =  props.team.id === props.game.times[0] ? props.game.times[1] : props.game.times[0];
    const [timeOponente, ] = props.opponents.filter(item => item.id === idOponente);

    useEffect(() => {
        props.onGetOpponents(props.team.id);
    }, [])

    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='center'>
                    <Grid container spacing={0} direction='row'>
                        <Grid item xs={5}>
                            <Typography variant='h6' align='center' >  {props.summaryPerson === 'Mandante' ? props.team.nome  : timeOponente.nome}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6'  align='center'>  -  </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='h6'  align='center'>  {props.summaryPerson === 'Visitante'? props.team.nome : timeOponente.nome}</Typography>
                        </Grid>
                    </Grid>
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
    opponents: state.opponents,
})

const mapDispatchToProps = dispatch => ({
    onGetOpponents: id => dispatch(getOpponents(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsFromGame)
