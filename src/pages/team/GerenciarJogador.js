import React from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';


const GerenciaJogador = (props) => {

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
                        <TextField label="Nome do Jogador" placeholder="Digite o nome do Jogador" variant="outlined" fullWidth required
                                   id='nome'
                                   onChange={props.onHandleChange}
                                   error={props.nomeValidation}
                                   value={props.jogador.nome}
                                   {... (props.nomeValidation && {helperText: 'Nome com poucos caracteres' })} />
                    </Grid>   
                    <Grid item xs={12}>
                        <TextField label='Posicao' placeholder='Selecione a posicão' fullWidth required variant='outlined'
                                   id='posicao' select
                                   onChange={props.onHandleSelect}
                                   value={props.jogador.posicao}
                                   error={props.posicaoValidation}
                                   {... (props.posicaoValidation && { helperText: 'Posição é obrigatória'})}>
                            <MenuItem key={1} name={'gol'} value={'Goleiro'}>Goleiro</MenuItem>
                            <MenuItem key={2} name={'def'} value={'Defesa'}>Defesa</MenuItem>
                            <MenuItem key={3} name={'mei'} value={'Meio-campo'}>Meio Campo</MenuItem>
                            <MenuItem key={4} name={'ata'} value={'Atacante'}>Atacante</MenuItem>
                        </TextField>
                    </Grid>    
                    <Grid item xs={12}>
                        <Button size="small" variant="contained">Foto</Button> 
                        <Button size="small" variant="contained" color="primary" onClick={props.onHandleSubmit}>Adicionar</Button>
                    </Grid>
                </Grid>
        </Box> 
    </Box>
    </>    
    )
};

export default GerenciaJogador;
