import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../imgs/ShrtFut.png';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
    Img: {
        position: 'fixed',
        height: '5%',
        width: '3%',
    },
    Container: {
        padding: '3vh',
        paddingLeft: '5vh',
    },
    Text: {
        color: 'white',
        paddingLeft: '9vh',
    }
})

function VarzeaInsideLogo() {
    const classes = useStyle();
    return (
        <Container maxWidth='sm' className={classes.Container}>
            <img src={logo} className={classes.Img} alt=""/>
            <Typography variant='h6' className={classes.Text}> Varzea </Typography>
        </Container>
    )
}

export default VarzeaInsideLogo;