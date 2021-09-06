import React from 'react';
import { Typography, Card, CardContent, Grid, TextField, AppBar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Form = () => {

    return (
    <>
    

        <Card>
            <CardContent>
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

                    <Grid xs={12} sm={6} item>
                        <TextField label="CEP" placeholder="Entre seu CEP" variant="outlined"/> <TextField label="Numero" placeholder="Entre seu número" variant="outlined"/> <TextField label="Complemento" placeholder="Entre seu complemento" variant="outlined"/> 
                    </Grid>

                    <Grid xs={12} item>
                        <TextField label="Cidade" placeholder="Entre seu cidade" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                        <TextField label="Estado" placeholder="Entre seu estado" variant="outlined" fullWidth required/>
                    </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
    </>

                    )};

                    export default Form;