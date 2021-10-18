import React, { useState, useEffect } from 'react';

import { Typography, Box } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default function OpponentsList(props) {
    return (
        <>
        <Box display='flex' justifyContent='center'>
            <Typography variant='h6'>
                Equipes disponiveis: {props.opponents.length}
            </Typography>
        </Box>
        <TextField label="Oponente" variant="outlined" fullWidth select id="oponente"
                        onChange={props.onHandleOponente}
                        value={props.oponente.value}>
                            {props.opponents.map(op => (
                                <MenuItem value={op.id}> {op.nome} </MenuItem>
                            ))}
        </TextField>
        </>
    )
}
