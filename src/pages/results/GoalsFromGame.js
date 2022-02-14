import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography, Grid, Box, Button } from '@material-ui/core'

import { getOpponents } from '../game/thunks';
import { loadGoalsFromMatch } from './thunks'
import useMatchGoals  from '../../hooks/useMatchGoals'

import { useParams } from 'react-router';


export const GoalsFromGame = (props) => {
    let { id } = useParams();

    const opponent =  props.team.id === props.game.teams[0].id ? props.game.teams[1] : props.game.teams[0];

    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='center'>
                    <Grid container spacing={0} direction='row'>
                        <Grid item xs={5}>
                            <Typography variant='h6' align='center' >  {props.summaryPerson === 'Mandante' ? props.team.name  : opponent.name}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6'  align='center'>  -  </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='h6'  align='center'>  {props.summaryPerson === 'Visitante'? props.team.name : opponent.name}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box display='flex' justifyContent='center'>
                <Grid container spacing={0} direction='row'>
                        <Grid item xs={5}>
                            <Typography variant='h1' align='center' >  {props.game.homeGoals}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h1'  align='center'>  x  </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='h1'  align='center'>  {props.game.awayGoals}</Typography>
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
})

export default connect(mapStateToProps, null)(GoalsFromGame)
