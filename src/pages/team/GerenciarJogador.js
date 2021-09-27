import React from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import SelecionarPosicao from './SelecionarPosicao';
import Icon from '@material-ui/icons'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const GerenciaJogador = () => {

    return (
    <>
    <Box
        sx={{
            m:8,
            display: 'flex',
            flexDirection: {xs: 'row', md: 'row'},
            alignItems: 'center',
            width: 750,
            border: '1px solid black',
            borderRadius: 16,
        }}>

        <Box  sx={{
            
                m: 8,          
                minWidth: 150,
                minHeight: 180,
                bgcolor: 'text.disabled',
            }}
            >
                <Grid container direction='column' alignItems='center' justifyContent='center'>
                <AddAPhotoIcon fontSize='large'> </AddAPhotoIcon>
                </Grid>
        </Box>

        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                m: -4,
                minWidth: { md: 350 },
                }}>
                
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>    
                        <TextField label="Nome do Jogador" placeholder="Digite o nome do Jogador" variant="outlined" fullWidth required />
                    </Grid>   
                    <Grid item xs={12}>
                        <SelecionarPosicao/>
                    </Grid>    
                    <Grid item xs={12}>
                        <Button size="small" variant="contained">Foto</Button> <Button size="small" variant="contained" color="primary">Adicionar</Button>
                    </Grid>
                </Grid>
        </Box> 
    </Box>
    </>    
    )
};

export default GerenciaJogador;
