import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, Grid, Box, Typography, Button, MenuItem } from '@material-ui/core'

import useTeam from '../../hooks/useTeam';
import useGameTeamInfo from '../../hooks/useGameTeamInfo';
import { loadPlayersAway, loadPlayersHome } from './thunks'


export const InsertGoalsAndCards = (props) => {
    const [homeId, awayId] = useGameTeamInfo(props.game.times[0], props.game.times[1], props.game)
    
    useEffect(() => {
        props.onGetPlayersAway(awayId);
        props.onGetPlayersHome(homeId);
    }, [])

    return (
        <Grid container spacing={1} direction='row'>
            <Grid item xs={5}>
                <Box paddingTop={3}>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField type='number' variant="outlined"/>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField type='select' label='Autor do gol' select fullWidth variant="outlined"
                                               value={props.homeGoal.autor} onChange={props.onChangeHomeGoal} name='autor'>
                                    {props.homePlayers.map(pl =>
                                        <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.nome}</MenuItem>
                                    )}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained'> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <TextField type='select' label='Cartão' select fullWidth variant="outlined">
                            {props.homePlayers.map(pl =>
                                <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.nome}</MenuItem>
                            )}
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained' onClick={() => alert(homeId)}> Salvar</Button>
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
                                    <TextField type='number' variant="outlined"/>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField type='select' label='Autor do gol' select fullWidth variant="outlined">
                                    {props.awayPlayers.map(pl =>
                                        <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.nome}</MenuItem>
                                    )}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained'> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <TextField type='select' label='Cartão' select fullWidth variant="outlined">
                                {props.awayPlayers.map(pl =>
                                    <MenuItem key={pl.id} name={pl.id} value={pl.id}> {pl.nome}</MenuItem>
                                )}
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained' onClick={() => alert(awayId)}> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    team: state.team,
    awayPlayers: state.awayPlayers,
    homePlayers: state.homePlayers,
    opponents: state.opponents,
})

const mapDispatchToProps = dispatch => ({
    onGetPlayersAway: id => dispatch(loadPlayersAway(id)),
    onGetPlayersHome: id => dispatch(loadPlayersHome(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InsertGoalsAndCards)
