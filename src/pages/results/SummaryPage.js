import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

import GoalsFromGame from './GoalsFromGame';
import InsertGoalsAndCards from './InsertGoalsAndCards';
import SubmitSummary from './SubmitSummary';
import InfoSummary from './InfoSummary';

import useSummary from '../../hooks/useSummary';
import { loadSumula } from './thunks'

import { useParams } from 'react-router';

const SummaryPage = (props) => {
    let { id } = useParams();
    var [_game, ] = props.games.filter(x => parseInt(x.id) === parseInt(id))
    const summaryPerson = useSummary(props.team.id, _game);
    
    useEffect(() => {
        props.onGetSummary(id);
    }, [])

    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Grid container spacing={2}>
            <Grid xs={12} item>
                <Box m={1} p={1}>
                    <Typography variant='h5' textAlign='center'> Sumula {summaryPerson} </Typography>
                    <Divider size='medium'/>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid xs={1}/>
                <Grid xs={10} item>
                    <GoalsFromGame game={_game} summaryPerson={summaryPerson}/>
                    {summaryPerson === 'Mandante' && props.summary.status !== 'aceito'? 
                    <>
                    <InsertGoalsAndCards />
                    <SubmitSummary />
                    </> : <InfoSummary status={props.summary.status}/>}
                </Grid>
            <Grid xs={1}/>
            </Grid>
        </Paper>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    games: state.games,
    team: state.team,
    summary: state.summary,
})

const mapDispatchToProps = dispatch => ({
    onGetSummary: id => dispatch(loadSumula(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);