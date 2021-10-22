import { React, useEffect } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { fetchPlayers } from './thunks';
import EditAndExcludePlayer from './EditAndExcludePlayer';

const TeamTable = (props) => {
    
    useEffect(() => {
        props.playersLoad(props.captain.time.id);
    }, [])

    return (
        <TableContainer>
            <Table size='small'>
                <TableHead style={{ backgroundColor: '#C5C5C5' }}>
                    <TableRow>
                        <TableCell align='center'> Posição </TableCell>
                        <TableCell align='center'> Nome </TableCell>
                        <TableCell align='center'> Jogos </TableCell>
                        <TableCell align='center'> Gols </TableCell>
                        <TableCell align='center'>  </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.players.length === 0 ?
                    <TableCell colSpan={4}>
                        <Box >
                            <Typography variant='h6' textAlign='center' style={{ marginLeft: '40%' }}> Ainda sem jogadores! </Typography>
                        </Box>
                    </TableCell> :
                    props.players.map((row) => (
                        <TableRow id={row.id}>
                            <TableCell align='center'> {row.posicao} </TableCell>
                            <TableCell align='center'> {row.nome} </TableCell>
                            <TableCell align='center'> 
                                {row.jogos}
                           </TableCell>
                           <TableCell align='center'> 
                                {row.gols}
                           </TableCell>
                           <TableCell>
                               <EditAndExcludePlayer player={row}/>
                           </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state => ({
    captain: state.captain,
    players: state.players,
})

const mapDispatchToProps = dispatch => ({
    playersLoad: id => dispatch(fetchPlayers(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamTable);