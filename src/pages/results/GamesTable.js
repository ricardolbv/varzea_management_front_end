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

import { retrieveGames, getOpponents } from '../game/thunks';
import ChallengeSelect from './ChallengeSelect';

const MyGame = (props) => {
    return <>{props.estado}</>;
}


export const GamesTable = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.onGetOpponents(props.captain.time.id);
        props.onGetGames(props.captain.time.id);
    }, [])

    const getAdversario = (id) => {
        var resp = '';

        props.oponnents.map(item => {
            if (item.id === id){
                resp = item
            }
        })

        return resp.nome;
    }

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
                    <TableRow style={{ backgroundColor: row.id_mando !== props.captain.time.id ? '#E5E5E5': 'white' }}>
                        <TableCell align='center'> {props.captain.time.id === row.times[0]? getAdversario(row.times[1]) :getAdversario(row.times[0])} </TableCell>
                        <TableCell align='center'> {row.dia} </TableCell>
                        <TableCell align='center'> {row.local} </TableCell>
                        <TableCell align='center'> {row.id_mando === props.captain.time.id ? <MyGame estado={row.aceite}/> : <ChallengeSelect id_game={row.id} estado={row.aceite}/>} </TableCell>
                        <TableCell>
                           {row.aceite === 'Aceito' ?
                           <Button variant='contained' onClick={() => history.push(`/home/results/summary/${row.id}`)}> Sumula </Button> :
                           <></>
                           }
                       </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

const mapStateToProps = (state) => ({
    games: state.games,
    captain: state.captain,
    oponnents: state.opponents,
})

const mapDispatchToProps = dispatch => ({
    onGetGames: id => dispatch(retrieveGames(id)),
    onGetOpponents: id => dispatch(getOpponents(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GamesTable)
