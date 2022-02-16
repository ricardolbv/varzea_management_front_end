import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

export default function ShowGoals(props) {
    return (
        <Box style={{ overflow: 'auto',  height: '30vh', width: '25vh'}}>
            {props.tipo === 'gol'? <GoalList lista={props.lista}/> : <CardList lista={props.lista}/>}
        </Box>
    )
}

function GoalList (props){
    return (
        <>
        <Typography variant='h6' align='center' >Gols</Typography>
        {props.lista.map(gol => (
            <>
                <Grid container spacing={1} direction='row'>
                    <Grid item xs={3}>
                        <SportsSoccerIcon />
                    </Grid>
                    <Grid item xs={9}>
                     <Typography>{gol.quantity} - {gol.player.name}</Typography>
                    </Grid>
                </Grid>
            </>
        ))}
        </>
    )
}

function CardList (props){
    return (
        <>
        <Typography variant='h6' align='center' >Cartões</Typography>
        {props.lista.map(cartao => (
            <>
                <Grid container spacing={1} direction='row'>
                    <Grid item xs={3}>
                        <AssignmentLateIcon />
                    </Grid>
                    <Grid item xs={9}>
                     <Typography>{cartao.cardType == 0 ? "Ama" : "Ver"} - {cartao.player.name}</Typography>
                    </Grid>
                </Grid>
            </>
        ))}
        </>
    )
}
