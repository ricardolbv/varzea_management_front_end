import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import GerenciaJogador from './GerenciarJogador';
import ManageGerenciaJogador from './ManageGerenciaJogador';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';


function PlayerForm() {
    const history = useHistory();

    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Grid container spacing={2}>
            <Grid xs={10} item>
                <Box m={1} p={1}>
                    <Typography variant='h5' textAlign='center'>Novo jogador </Typography>
                    <Divider size='medium'/>
                </Box>
            </Grid>
            <Grid xs={2} item display='flex' justifyContent='center'>
                <Box m={1} p={1}>
                    <Button variant='contained' startIcon={<ArrowBackIcon />} onClick={ () => history.push('/home/myteam') }>
                        Voltar
                    </Button>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <ManageGerenciaJogador/>
            </Grid>
        </Grid>
       </Paper>
       </Box>
    )
}

export default PlayerForm;
