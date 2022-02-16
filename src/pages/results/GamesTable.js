import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { useToken } from '../../auth/useToken';
 
import { retrieveGames } from '../game/thunks';
import ChallengeSelect from './ChallengeSelect';

import { MatchStatus } from './Constants';

const MyGame = (props) => {
    return <>{ MatchStatus[props.estado] }</>;
}


export const GamesTable = (props) => {
    const history = useHistory();
    const [token, setToken] = useToken();

    useEffect(() => {
        props.onGetGames(token);
    }, [])

    return (
        <TableContainer>
        <Table size='small'>
            <TableHead style={{ backgroundColor: '#C5C5C5' }}>
                <TableRow>
                    <TableCell align='center'> Adversário </TableCell>
                    <TableCell align='center'> Dia </TableCell>
                    <TableCell align='center'> Local </TableCell>
                    <TableCell align='center'> Aceite </TableCell>
                    <TableCell align='center'>  </TableCell>
                    <TableCell align='center'> Resultado </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.games.length === 0 ?
                <TableCell colSpan={4}>
                    <Box >
                        <Typography variant='h6' textAlign='center' style={{ marginLeft: '40%' }}> Ainda sem Jogos! </Typography>
                    </Box>
                </TableCell> :
                props.games.map((row) => (
                    <TableRow style={{ backgroundColor: row.homeId !== props.team.id ? '#E5E5E5': 'white' }}>
                        <TableCell align='center'> {props.team.id === row.teams[0].id ? row.teams[1].name : row.teams[0].name} </TableCell>
                        <TableCell align='center'> {row.date} </TableCell>
                        <TableCell align='center'> {row.local} </TableCell>
                        <TableCell align='center'> {row.homeId === props.team.id ? <MyGame estado={row.status}/> : <ChallengeSelect id_game={row.id} estado={row.status}/>} </TableCell>
                        <TableCell align='center'>
                           {row.status === 1 || row.status === 3 ?
                           <Button variant='contained' onClick={() => history.push(`/home/results/summary/${row.id}`)}> Sumula </Button> :
                           <></>
                           }
                       </TableCell>
                       <TableCell align='center'> {row.winner}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

const mapStateToProps = (state) => ({
    games: state.games,
    team: state.team,
})

const mapDispatchToProps = dispatch => ({
    onGetGames: token => dispatch(retrieveGames(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GamesTable)
