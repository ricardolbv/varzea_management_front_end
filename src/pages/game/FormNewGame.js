import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import { getOpponents } from './thunks';

export const FormNewGame = (props) => {
    
    useEffect(() => {
        props.onGetOpponents(props.captain.time.id);
    }, [])

    return (
        <>
          <Grid container direction='row' >
                <Grid item xs={6} >
                    <Box display="center" justifyContent="center" >
                        <Box m={3} >
                            <Typography variant='h5' textAlign='center'> Infos do jogo </Typography>
                        </Box>
                        <Box  m={2}>
                            <TextField label="X" variant="outlined" fullWidth/>
                        </Box>
                        <Box  m={2}>
                            <TextField label="Y" variant="outlined" fullWidth/>
                        </Box>
                        <Box  m={2}>
                            <TextField label="X" variant="outlined" fullWidth/>
                        </Box>
                        <Box  m={2}>
                            <TextField label="Z" variant="outlined" fullWidth/>
                        </Box>
                        <Box m={2} display='flex' justifyContent='flex-end' >
                            <Button variant="contained">Salvar</Button> 
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box display="center" justifyContent="center" >
                        <Box m={3} >
                            <Typography variant='h5' textAlign='center'> Oponentes </Typography>
                        </Box>
                        <Box m={2} >
                            <TextField id='oponente' variant="outlined" fullWidth select >
                                {props.opponents.map(op => (
                                    <MenuItem key={op.id} value={op.nome}>{op.nome}</MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                </Grid>
            </Grid>  
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
