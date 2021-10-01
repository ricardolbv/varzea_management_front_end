import React from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { InputLabel, MenuItem, FormControl, Select, Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { useLocation  } from 'react-router';

import PanToolIcon from '@material-ui/icons/PanToolOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';


const GerenciaJogador = (props) => {
    const location = useLocation();

    return (
    <>
    <Box 
        width='150vh'
        sx={{
            m:8,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 16,
        }} boxShadow={4} paddingLeft={4}>
        
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
                alignItems: { xs: 'center', md: 'flex-center' },
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
                        <Box display='flex' justifyContent='flex-end' >
                            <Button size="small" variant="contained">Foto</Button> 
                            <Button size="small" variant="contained" color="primary" onClick={props.onHandleSubmit} style={{ backgroundColor: '#2F303A' }}>
                                { location.pathname === '/home/myteam/new-player' ?
                                        'Adicionar':
                                        'Editar'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
        </Box> 


            <Box paddingLeft={15} display='flex' justifyContent='flex-end' 
            sx={{
                
                m: 8,          
                minWidth: 150,
                minHeight: 180,

            }}
            >
                <Grid container direction='column' alignItems='center' justifyContent='center'>
                    <Typography variant='h6'> <PanToolIcon /> Goleiros: {props.players.filter((obj) => obj.posicao === 'Goleiro').length}</Typography>
                    <Typography variant='h6'> <EmojiPeopleOutlinedIcon /> Defesas: {props.players.filter((obj) => obj.posicao === 'Defesa').length}</Typography>
                    <Typography variant='h6'> <DirectionsRunOutlinedIcon /> Meias: {props.players.filter((obj) => obj.posicao === 'Meio-campo').length}</Typography>
                    <Typography variant='h6'> <DirectionsWalkIcon /> Atacantes: {props.players.filter((obj) => obj.posicao === 'Atacante').length} </Typography>
                </Grid>
        </Box>
    </Box>
    </>    
    )
};

const mapStateToProps = (state) => ({
    players: state.players,
})


export default connect(mapStateToProps, null)(GerenciaJogador)
