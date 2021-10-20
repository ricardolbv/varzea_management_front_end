import React from 'react';
import { Card, CardContent, Grid, TextField, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import MenuItem from '@material-ui/core/MenuItem';

const Form = (props) => {
    const history = useHistory();

    return (
    <>
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                <Grid xs={3} item/>
                <Grid xs={6} item>
                <Grid container spacing={2}>
                    <Grid xs={6} item>
                        <TextField label="Nome" placeholder="Entre seu nome completo" variant="outlined" fullWidth required
                                   onChange={props.onHandleChange} id='nome'
                                   error={props.nomeValidation}
                                   value={props.capitao.nome}
                                   {... (props.nomeValidation && { helperText: 'Nome com poucos caracteres'})}/>
                    </Grid>
                    <Grid xs={6} item>
                        <TextField label="Email" placeholder="Email" variant="outlined" fullWidth required
                                   onChange={props.onHandleChange} id='email'
                                   error={props.emailValidation}
                                   value={props.capitao.email}
                                   {... (props.emailValidation && { helperText: 'Formato de email invalido'})}/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Telefone" placeholder="Entre seu telefone" variant="outlined" fullWidth required
                                   onChange={props.onHandleChange} id='telefone'
                                   value={props.capitao.telefone}
                                   error={props.telefoneValidation}
                                   {... (props.telefoneValidation && { helperText: 'Telefone com poucos caracteres (Min 12)'})}/>
                    </Grid>
                    <Grid xs={6} item>
                        <TextField label="Senha" placeholder="Senha" variant="outlined" fullWidth required
                                   onChange={props.onHandleChange} id='psw'
                                   type='password'
                                   value={props.capitao.psw}
                                   error={props.pswValidation}
                                   {... (props.pswValidation && { helperText: 'Poucos caracteres ou senhas não batem'})}/>
                    </Grid>
                    <Grid xs={6} item>
                        <TextField label=" Confirmar Senha" placeholder="Confirmar" variant="outlined" fullWidth required
                                   onChange={props.onHandleChange} id='confirmPsw'
                                   type='password'
                                   value={props.capitao.confirmPsw}
                                   error={props.pswValidation}
                                   {... (props.pswValidation && { helperText: 'Poucos caracteres ou senhas não batem'})}/>
                    </Grid>
                    

                    <Grid xs={12} item>
                        <TextField label="Estado" placeholder="Entre seu estado" variant="outlined" fullWidth required
                                   onChange={props.onHandleSelect} id='estado' 
                                   select
                                   value={props.capitao.estado}
                                   error={props.estadoValidation}
                                   {... (props.estadoValidation && { helperText: 'Estado é obrigatório'})}>
                            <MenuItem key={1} name={'ac'} value={'Acre - AC'}> Acre - AC</MenuItem>
                            <MenuItem key={2} name={'al'} value={'Alagoas - AL'}> Alagoas - AL</MenuItem>
                            <MenuItem key={3} name={'ap'} value={'Amapá - AP'}> Amapá - AP</MenuItem>
                            <MenuItem key={4} name={'am'} value={'Amazonas - AM'}> Amazonas - AM</MenuItem>
                            <MenuItem key={5} name={'ba'} value={'Bahia - BA'}> Bahia - BA</MenuItem>
                            <MenuItem key={6} name={'ce'} value={'Ceará - CE'}> Ceará - CE</MenuItem>
                            <MenuItem key={7} name={'df'} value={'Distrito Federal - DF'}> Distrito Federal - DF</MenuItem>
                            <MenuItem key={8} name={'es'} value={'Espito Santo - ES'}> Espito Santo - ES</MenuItem>
                            <MenuItem key={9} name={'go'} value={'Goiás - GO'}> Goiás - GO</MenuItem>
                            <MenuItem key={10} name={'ma'} value={'Maranhão - MA'}> Maranhão - MA</MenuItem>
                            <MenuItem key={11} name={'mt'} value={'Mato Grosso - MT'}> Mato Grosso - MT</MenuItem>
                            <MenuItem key={12} name={'mg'} value={'Minas Gerais - MG'}> Minas Gerais - MG</MenuItem>
                            <MenuItem key={13} name={'pa'} value={'Pará - PA'}> Pará - PA</MenuItem>
                            <MenuItem key={14} name={'pb'} value={'Paraíba - PB'}> Paraíba - PB</MenuItem>
                            <MenuItem key={15} name={'pr'} value={'Paraná - PR'}> Paraná - PR</MenuItem>
                            <MenuItem key={16} name={'pe'} value={'Pernambuco - PE'}> Pernambuco - PE</MenuItem>
                            <MenuItem key={17} name={'pe'} value={'Piauí - PI'}> Piauí - PI</MenuItem>
                            <MenuItem key={18} name={'rj'} value={'Rio de Janeiro - RJ'}> Rio de Janeiro - RJ</MenuItem>
                            <MenuItem key={19} name={'rn'} value={'Rio Grande do Norte - RN'}> Rio Grande do Norte - RN</MenuItem>
                            <MenuItem key={20} name={'rs'} value={'Rio Grande do Sul - RS'}> Rio Grande do Sul - RS</MenuItem>
                            <MenuItem key={21} name={'ro'} value={'Rondônia - RO'}> Rondônia - RO</MenuItem>
                            <MenuItem key={22} name={'rr'} value={'Roraima- RR'}> Roraima- RR</MenuItem>
                            <MenuItem key={23} name={'sc'} value={'Santa Catarina - SC'}> Santa Catarina - SC</MenuItem>
                            <MenuItem key={24} name={'sp'} value={'São Paulo - SP'}> São Paulo - SP</MenuItem>
                            <MenuItem key={25} name={'se'} value={'Sergipe - SE'}> Sergipe - SE</MenuItem>
                            <MenuItem key={26} name={'to'} value={'Tocantins - TO'}> Tocantins - TO</MenuItem>
                        </TextField>
                    </Grid>
                    </Grid>
                    <Box paddingTop={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
                        <Button variant="contained" onClick= {props.onHandleSubmit} id='cadastrar'>
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