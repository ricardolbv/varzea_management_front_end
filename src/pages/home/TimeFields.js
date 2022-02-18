import React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import PieStat from './PieStat';
import { getTeam, updateTeam } from './thunks';

const dados = {
    vitorias: 5,
    empates: 4,
    derrotas: 2,
}

export const TimeFields = (props) => {
    return (
        <>
          <Grid container direction='row' >
                <Grid item xs={6} >
                    <Box display="center" justifyContent="center" >
                        <Box m={3} >
                            <Typography variant='h5' textAlign='center'> Infos de equipe </Typography>
                        </Box>
                        <Box  m={2}>
                            <TextField label="Nome" variant="outlined" fullWidth
                                       id='nome' 
                                       onChange={props.onHandleChange}
                                       error={props.nomeValidation}
                                       value={props.time.nome}
                                       {... (props.nomeValidation && { helperText: 'Nome com poucos caracteres'})}/>
                        </Box>
                        <Box  m={2}>
                            <TextField label="Modalidade" variant="outlined" fullWidth select id='modalidade'
                                       onChange={props.onHandleChangeSelectModalidade}
                                       value={props.time.modalidade}
                                       error={props.modalidadeValidation}
                                       {... (props.modalidadeValidation && { helperText: 'Modalidade é obrigatória'})}>
                                <MenuItem key={1} value="Campo"> Campo </MenuItem>
                                <MenuItem key={2} value="Society"> Society </MenuItem>
                                <MenuItem key={3} value="Futsal"> Futsal </MenuItem>
                            </TextField>
                        </Box>
                        <Box  m={2}>
                            <TextField label="Melhor dia de jogo" variant="outlined" fullWidth select id='data'
                                       onChange={props.onHandleChangeDiaJogo}
                                       value={props.time.data}
                                       error={props.diaJogoValidation}
                                       {... (props.diaJogoValidation && { helperText: 'Dia de jogo é obrigatório'})}>
                                <MenuItem key={1} value="Segunda-Feira"> Segunda-Feira </MenuItem>
                                <MenuItem key={2} value="Terça-Feira"> Terça-Feira </MenuItem>
                                <MenuItem key={3} value="Quarta-Feira"> Quarta-Feira </MenuItem>
                                <MenuItem key={4} value="Quinta-Feira"> Quinta-Feira </MenuItem>
                                <MenuItem key={5} value="Sexta-Feira"> Sexta-Feira </MenuItem>
                                <MenuItem key={6} value="Sabádo"> Sabádo </MenuItem>
                                <MenuItem key={7} value="Domingo"> Domingo </MenuItem>
                            </TextField>
                        </Box>
                        <Box  m={2}>
                            <TextField label="Vice Capitão" variant="outlined" fullWidth select id="vice_capitao"
                                       onChange={props.onHandleChangeVice}
                                       value={props.time.vice_capitao}>
                                {props.players.map(plr => (
                                    <MenuItem key={plr.id} value={plr.nome}> {plr.nome} </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <Box m={2} display='flex' justifyContent='flex-end' >
                            <Button variant="contained" onClick={props.onHandleSubmit}>Salvar</Button> 
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1} >
                    <Box display="center" justifyContent="center" alignItems="center" >
                        <Divider orientation="vertical" variant='inset'/>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                <Box m={1} display='flex' justifyContent='center'>
                    <Typography variant='h5' textAlign='center'> Estatísticas: </Typography>
                </Box>
                <Box display='flex' justifyContent='center'>
                    <Typography variant='body1' textAlign='center'> Artilheiro: xxxx </Typography>
                </Box>
                    <Box p={1} display='flex' justifyContent='center'>
                        <PieStat vitorias={props.team.victories} empates={props.team.draws} derrotas={props.team.defeats}/>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Typography variant='body2' textAlign='center'>V {props.team.victories} E {props.team.draws} D {props.team.defeats} </Typography>
                    </Box>
                </Grid>
            </Grid>  
        </>
    )
}

const mapStateToProps = (state) => ({
    team: state.team,
    players: state.players
})

const mapDispatchToProps = dispatch => ({
    GetEquipe: () => dispatch(getTeam()),
    onUpdateEquipe: (equipe, id) => dispatch(updateTeam(equipe, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeFields)
