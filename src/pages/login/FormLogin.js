import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import AboveForm from './AboveForm';


const useStyle = makeStyles({
    Form: {
        position: "fixed",
        maxHeight: "565px",
        maxWidth: "550px",
        minWidth:"385px",
        minHeight: "480px",
        top: "30%",
        left: "50%",
        marginTop: "-35px",
        marginLeft: "-205px",
    },
    PrimaryColor: {
        color: "#0D0B23",
        margin: "10px",
        marginTop: "35px",
    },
    GreyText: {
        color: "#9B9B9B",
        font: "Roboto",
        marginTop: "8vh",
    },
    Input :{
        width: '300px',
        height: '40px',
        marginTop: '35px',
    },
    Forgot :{
        marginTop: '30px',
        marginRight: "40px"
    },
    Btn: {
        backgroundColor: "#0D0B23",
        width: '300px',
        height: '40px',
        marginTop: '35px',
    },
})

function FormLogin(props) {
    const classes = useStyle();
    return (
        <Box boxShadow={4} className={classes.Form}>
        <Paper elevation={2} className={classes.Form} >
            <AboveForm />
            <form>
                <Typography variant='subtitle1' align="center" className={classes.GreyText}>Faça seu login</Typography>
                <Typography align="center">
                    <TextField id="email" label="E-mail" variant="outlined" className={classes.Input} 
                               onChange={props.onHandleChange}
                               error={props.emailValidation}
                               value={props.capitao.email}
                               {... (props.emailValidation && { helperText: 'Formato de email invalido'})}/>
                </Typography>
                <Typography align="center">
                    <TextField id="psw" label="Digite sua senha" variant="outlined" className={classes.Input} type='password'
                               onChange={props.onHandleChange}
                               value={props.capitao.psw}
                               error={props.pswValidation}
                               {... (props.pswValidation && { helperText: 'Poucos caracteres'})}/>
                </Typography>
                <a href="https://material-ui.com/api/text-field/">
                <Typography align="right" className={classes.Forgot}>
                    Esqueceu a senha?
                </Typography>
                </a>
                <Typography align="center">
                <Button variant="contained" color="primary" className={classes.Btn} onClick= {props.onHandleSubmit}>
                    Entre
                </Button>
                </Typography>
            </form>
        </Paper>
        </Box>
    )
}

export default FormLogin;