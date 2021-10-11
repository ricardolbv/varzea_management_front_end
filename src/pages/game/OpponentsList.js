import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';

export default function OpponentsList(props) {
    return (
        <>
        <Box display='flex' justifyContent='center'>
            <Typography variant='h6'>
                Equipes disponiveis: {props.opponents.length}
            </Typography>
        </Box>
        <Paper style={{ height: '100%' }}>
        <List style={{ overflow:'auto', position: 'relative', height: '35vh'}}>
            {props.opponents.map(op => (
                <ListItem disablePadding>
                    <ListItemText primary={op.nome}/>
                    <ListItemIcon>
                        <Checkbox color="default" />
                    </ListItemIcon>
                </ListItem>
            ))}
        </List>
        </Paper>
        </>
    )
}
