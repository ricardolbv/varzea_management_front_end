import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const jogadoresMock = [
    {'nome': 'Bruninho doque', 'posicao': 'Zagueiro'},
    {'nome': 'Jorge', 'posicao': 'Atacante'},
    {'nome': 'Tst01', 'posicao': 'Lateral'},
    {'nome': 'Tst02', 'posicao': 'Lateral'},
    {'nome': 'Tst03', 'posicao': 'Meio campo'},
    {'nome': 'Tst04', 'posicao': 'Goleiro'},
]

const TeamTable = () => {
    return (
        <TableContainer>
            <Table size='medium'>
                <TableHead style={{ backgroundColor: '#E5E5E5' }}>
                    <TableRow>
                        <TableCell align='center'> POS </TableCell>
                        <TableCell align='center'> Nome </TableCell>
                        <TableCell align='center'> Jogos </TableCell>
                        <TableCell align='center'> Gols </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jogadoresMock.map((row) => (
                        <TableRow>
                            <TableCell align='center'> {row.posicao} </TableCell>
                            <TableCell align='center'> {row.nome} </TableCell>
                            <TableCell align='center'> 
                                <TextField
                                    id='jogos'
                                    type="number"
                            />
                           </TableCell>
                           <TableCell align='center'> 
                                <TextField
                                    id='gols'
                                    type="number"
                                    defaultValue='0'
                            />
                           </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TeamTable;