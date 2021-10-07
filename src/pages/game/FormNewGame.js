import React, {useEffect} from 'react'
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

import { getOpponents } from './thunks';

export const FormNewGame = (props) => {
    
    useEffect(() => {
        props.onGetOpponents(props.captain.time.id);
    }, [])

    return (
        <>
        <FormGroup>
          <Grid container direction='row' >
                <Grid item xs={6} >
                    <Box display="center" justifyContent="center" >
                        <Box  m={2} p={1}>
                            <Typography variant='h6' textAlign='center'> Modalidade </Typography>
                            <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Futsal" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Campo" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Society" />
                        </Box>
                        <Box  m={2} p={1}>
                            <Typography variant='h6' textAlign='center'> Tipo de mando de jogo </Typography>
                            <FormControlLabel control={<Checkbox color="default"/>} label="Casa" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Fora" />
                        </Box>
                        <Box  m={2} p={1}>
                            <Typography variant='h6' textAlign='center'> Dia de jogo </Typography>
                            <FormControlLabel control={<Checkbox color="default"/>} label="Seg" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Ter" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Qua" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Qui" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Sex" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Sab" />
                            <FormControlLabel control={<Checkbox color="default"/>} label="Dom" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Grid container spacing={1} direction='column'>
                        <Grid item xs={12}>
                        <Box m={2} >
                           <OpponentsList opponents={props.opponents}/>
                        </Box>
                        </Grid>
                        <Grid item xs={12}>
                        <Box m={2}>
                            <TextField id='local' variant="outlined" fullWidth label='Local de Jogo'> Local</TextField>
                        </Box>
                       
                        <Box m={2} display='flex' justifyContent='flex-end' >
                            <Button variant="contained">Marcar</Button> 
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
    captain: state.captain,
    opponents: state.opponents,
})

const mapDispatchToProps = dispatch => ({
    onGetOpponents: id => dispatch(getOpponents(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormNewGame)
