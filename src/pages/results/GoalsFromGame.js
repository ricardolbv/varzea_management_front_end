import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography, Grid, Box, Button } from '@material-ui/core'

import { getOpponents } from '../game/thunks';
import { loadGoalsFromMatch } from './thunks'
import useMatchGoals  from '../../hooks/useMatchGoals'

import { useParams } from 'react-router';


export const GoalsFromGame = (props) => {
    let { id } = useParams();

    const idOponente =  props.team.id === props.game.times[0] ? props.game.times[1] : props.game.times[0];
    const [timeOponente, ] = props.opponents.filter(item => item.id === idOponente);
    //Todo: Fazer uma hook que contabiliza gols adversarios e meus gols.
    var goalsHome =  useMatchGoals(props.goalsHomeSummary)
    var goalsAway =  useMatchGoals(props.goalsAwaySummary)

    useEffect(() => {
        props.onGetOpponents(props.team.id);
        props.onLoadGoalsFromMatch(id)
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
                <Grid container spacing={0} direction='row'>
                        <Grid item xs={5}>
                            <Typography variant='h1' align='center' >  {goalsHome}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h1'  align='center'>  x  </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='h1'  align='center'>  {goalsAway}</Typography>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Grid>
            <Grid item xs={1}/>
        </Grid>    
    )
}

const mapStateToProps = (state) => ({
    team: state.team,
    opponents: state.opponents,
    summary: state.summary,
    goalsAwaySummary: state.goalsAwaySummary,
    goalsHomeSummary: state.goalsHomeSummary,
})

const mapDispatchToProps = dispatch => ({
    onGetOpponents: id => dispatch(getOpponents(id)),
    onLoadGoalsFromMatch: id => dispatch(loadGoalsFromMatch(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsFromGame)
