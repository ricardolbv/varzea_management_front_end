import React from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Form = () => {
    const history = useHistory();

    return (
    <>
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                <Grid xs={3} item/>
                <Grid xs={6} item>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                        <TextField label="Nome" placeholder="Entre seu nome completo" variant="outlined" fullWidth required/>
                    </Grid>
                                
                    <Grid xs={12} item>
                        <TextField label="CPF" placeholder="Entre seu CPF" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                        <TextField label="Telefone" placeholder="Entre seu telefone" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                        <TextField label="Endereco" placeholder="Entre seu endereço" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField label="CEP" placeholder="Entre seu CEP" variant="outlined" style={{ width: '32.3%', paddingRight:'1%' }}/> 
                        <TextField label="Numero" placeholder="Entre seu número" variant="outlined" style={{ width: '32.5%', paddingRight:'1%' }}/> 
                        <TextField label="Complemento" placeholder="Entre seu complemento" variant="outlined" style={{ width: '33%' }}/> 
                    </Grid>

                    <Grid xs={12} item>
                        <TextField label="Cidade" placeholder="Entre seu cidade" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                        <TextField label="Estado" placeholder="Entre seu estado" variant="outlined" fullWidth required/>
                    </Grid>
                    </Grid>
                    <Box paddingTop={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
                        <Button variant="contained" onClick= {() => history.push('/home')}>
                            Cadastrar
                        </Button>
                    </Box>
                    </Grid>
                    </Grid>
                    <Grid xs={3} item/>
            </CardContent>
        </Card>
     </>

                    )};

                    export default Form;