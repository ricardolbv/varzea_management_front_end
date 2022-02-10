import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Checkbox } from '@material-ui/core';

import OpponentsList from './OpponentsList';
import { useToken } from '../../auth/useToken';
import { getOpponents, createGame } from './thunks';

export const FormNewGame = (props) => {
    const [local, setLocal] = useState('');
    const [token, setToken] = useToken();

    const [opponent, setOpponent] = useState({
        value: '',
    })

    const [modalidade, setModalidade] = useState({ 
        futsal: true,
        campo: false,
        society: false,
    })

    const [dia, setDia] = useState({
        'Segunda-Feira': true,
        'Terça-Feira': false,
        'Quarta-Feira': false,
        'Quinta-Feira': false,
        'Sexta-Feira': false,
        'Sabádo': false,
        'Domingo': false,
    })

    const onSubmit = () => {
        const game = montaBody();
        props.onCreateGame(game, token);
        setLocal('');
        setOpponent(opponent.value = '');
    }

    const montaBody = () => {
        const resp = {
            homeId : props.team.id,
            visitorId: opponent.value,
            modality :'',
            date : '',
            local : local,
        }


        Object.entries(modalidade).map(entry => {
            if (entry[1])
                resp.modality = entry[0];
        });
        Object.entries(dia).map(entry => {
            if (entry[1])
                resp.date = entry[0];
        });

        return resp;
    }
    

    useEffect(() => {
        props.onGetOpponents(token);
    }, [])

    /**Preenchimento de checkbox */
    const opponentChange = ({ target }) => {
        setOpponent({
            value: target.value
        })
    }

    const localChange = ({ target }) => {
        setLocal(target.value)
    }

    const modalidadeChange = ({ target }) => {
        resetModalidade()
        setModalidade({
            ...modalidade,
            [ target.id ]: target.checked
        })
    }

    const resetModalidade = () => {
        modalidade.society = false;
        modalidade.campo = false;
        modalidade.futsal = false;
    }

    const diaChange = ({ target }) => {
        resetDia()
        setDia({
            ...dia,
            [ target.id ]: target.checked
        })
    }

    const resetDia = () => {
        dia['Segunda-Feira'] = false;
        dia['Terça-Feira'] = false;
        dia['Quarta-Feira'] = false;
        dia['Quinta-Feira'] = false;
        dia['Sexta-Feira'] = false;
        dia['Sabádo'] = false;
        dia['Domingo'] = false;
    }


    
    const getFilter = () => {
        var filterModalidade = '';
        var filterDia = '';
        
        /**Filtro por modalidade */
        Object.entries(modalidade).map(entry => {
            if (entry[1])
                filterModalidade = entry[0];
        });
        /** Filtro por dia */
        Object.entries(dia).map(entry => {
            if (entry[1])
                filterDia = entry[0];
        });

        const filter = props.opponents.filter(item => item.modality ==='' || item.modality.toLowerCase() === filterModalidade)
        var resp = filter.filter(item => item.gameDay === '' || item.gameDay === filterDia)
        var reset = resp.map(item => ({ ...item, selected: false }))

        return reset
    }


    return (
        <>
        <FormGroup>
          <Grid container direction='row' spacing={3}>
                <Grid item xs={6} >
                    <Box display="center" justifyContent="center" >
                        <Box  m={2} p={1}>
                            <Typography variant='h6' textAlign='center'> Modalidade </Typography>
                            <FormControlLabel control={<Checkbox color="default" defaultChecked id='futsal' onChange={modalidadeChange} checked={modalidade.futsal}/>} label="Futsal" />
                            <FormControlLabel control={<Checkbox color="default" id='campo'onChange={modalidadeChange} checked={modalidade.campo}/>} label="Campo"/>
                            <FormControlLabel control={<Checkbox color="default" id='society' onChange={modalidadeChange} checked={modalidade.society}/>} label="Society"/>
                        </Box>
                        <Box  m={2} p={1}>
                            <Typography variant='h6' textAlign='center'> Dia de jogo </Typography>
                            <FormControlLabel control={<Checkbox color="default" id='Segunda-Feira' defaultChecked checked={dia['Segunda-Feira']} onChange={diaChange}/>} label="Seg" />
                            <FormControlLabel control={<Checkbox color="default" id='Terça-Feira' checked={dia['Terça-Feira']} onChange={diaChange} /> } label="Ter" />
                            <FormControlLabel control={<Checkbox color="default" id='Quarta-Feira' checked={dia['Quarta-Feira']} onChange={diaChange}/>} label="Qua" />
                            <FormControlLabel control={<Checkbox color="default" id='Quinta-Feira' checked={dia['Quinta-Feira']} onChange={diaChange}/>} label="Qui" />
                            <FormControlLabel control={<Checkbox color="default" id='Sexta-Feira' checked={dia['Sexta-Feira']} onChange={diaChange}/>} label="Sex" />
                            <FormControlLabel control={<Checkbox color="default" id='Sabádo' checked={dia['Sabádo']} onChange={diaChange}/>} label="Sab" />
                            <FormControlLabel control={<Checkbox color="default" id='Domingo' checked={dia['Domingo']} onChange={diaChange}/>} label="Dom" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Grid container spacing={3} direction='column'>
                        <Grid item xs={12}>
                        <Box m={2} >
                           <OpponentsList opponents={getFilter()} oponente={opponent}
                                          onHandleOponente={opponentChange} />
                        </Box>
                        </Grid>
                        <Grid item xs={12}>
                        <Box m={2}>
                            <TextField id='local' variant="outlined" fullWidth label='Local de Jogo' onChange={localChange}> Local</TextField>
                        </Box>
                       
                        <Box m={2} display='flex' justifyContent='flex-end' >
                            <Button variant="contained" onClick={onSubmit}>Marcar</Button> 
                        </Box>
                        </Grid>
                   
                    </Grid>
                </Grid>
            </Grid>
            </FormGroup>  
        </>
    )
}

const mapStateToProps = (state) => ({
    team: state.team,
    opponents: state.opponents,
})

const mapDispatchToProps = dispatch => ({
    onGetOpponents: token => dispatch(getOpponents(token)),
    onCreateGame: (game, token) => dispatch(createGame(game, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormNewGame)
