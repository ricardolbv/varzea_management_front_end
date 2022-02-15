import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, Grid, Box, Typography, Button, MenuItem } from '@material-ui/core'

import useGameTeamInfo from '../../hooks/useGameTeamInfo';
import { loadPlayersAway, loadPlayersHome } from './thunks'
import { useToken } from '../../auth/useToken';


export const InsertGoalsAndCards = (props) => {
    const [homeId, awayId] = useGameTeamInfo(props.game.teams[0], props.game.teams[1], props.game);
    const [token, setToken] = useToken();
    
    useEffect(() => {
        props.onGetPlayersAway(awayId, token);
        props.onGetPlayersHome(homeId, token);
    }, [])

    return (
        <Grid container spacing={1} direction='row'>
            <Grid item xs={5}>
                <Box paddingTop={3}>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField type='number' variant="outlined" id='homeGoal' onChange={props.onChangeHome}
                                               value={props.home.homeGoal}/>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField type='select' label='Autor do gol' select fullWidth variant="outlined" name='homeGoalAuthor'
                                               id='homeGoalAuthor' onChange={props.onChangeSelectHomeGoalAuthor} value={props.home.homeGoalAuthor}>
                                    {props.homePlayers.map(pl =>
                                        <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.name}</MenuItem>
                                    )}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                                <Button variant='contained' onClick={props.onSubmitGoalHome}> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                        <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField variant="outlined" id='homeCardType' select fullWidth name="homeCardType"
                                               onChange={props.onChangeSelectHomeCard} value={props.home.homeCardType}>
                                        <MenuItem key={1} name="vermelho" value={1}> Vermelho </MenuItem>
                                        <MenuItem key={2} name="amarelo" value={0}> Amarelo </MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField label='Cartão' select fullWidth variant="outlined" id="homeCardPlayer"
                                               name="homeCardPlayer" onChange={props.onChangeSelectHomeCard} value={props.home.homeCardPlayer}>
                                        {props.homePlayers.map(pl =>
                                            <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.name}</MenuItem>
                                        )}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                                <Button variant='contained' onClick={props.onSubmitCardHome}> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5}>
                <Box paddingTop={3}>
                <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField type='number' variant="outlined" id='awayGoal' onChange={props.onChangeAway}
                                               value={props.away.awayGoal} name='awayGoal'/>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField type='select' label='Autor do gol' select fullWidth variant="outlined" name='awayGoalAuthor'
                                               id='awayGoalAuthor' onChange={props.onChangeSelectAwayGoalAuthor} value={props.away.awayGoalAuthor}>
                                    {props.awayPlayers.map(pl =>
                                        <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.name}</MenuItem>
                                    )}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained' onClick={props.onSubmitGoalAway}> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                             <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField variant="outlined"  select fullWidth id="awayCardType" name="awayCardType"
                                               onChange={props.onChangeSelectAwayCard} value={props.away.awayCardType}>
                                        <MenuItem key={1} name="vermelho" value={1}> Vermelho </MenuItem>
                                        <MenuItem key={2} name="amarelo" value={0}> Amarelo </MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField label='Cartão' select fullWidth variant="outlined" id="awayCardPlayer"
                                               name="awayCardPlayer" onChange={props.onChangeSelectAwayCard} value={props.away.awayCardPlayer}>
                                        {props.awayPlayers.map(pl =>
                                            <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.name}</MenuItem>
                                        )}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained' onClick={props.onSubmitCardAway}> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    awayPlayers: state.awayPlayers,
    homePlayers: state.homePlayers,
})

const mapDispatchToProps = dispatch => ({
    onGetPlayersAway: (id, token) => dispatch(loadPlayersAway(id, token)),
    onGetPlayersHome: (id, token) => dispatch(loadPlayersHome(id, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InsertGoalsAndCards)
