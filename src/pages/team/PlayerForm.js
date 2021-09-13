import React from 'react'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

function PlayerForm() {
    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Grid container spacing={2}>
            <Grid xs={7} item>
                <Box m={1} p={1}>
                    <Typography variant='h4' textAlign='center'>Novo jogador: </Typography>
                </Box>
            </Grid>
        </Grid>
       </Paper>
       </Box>
    )
}

export default PlayerForm;
