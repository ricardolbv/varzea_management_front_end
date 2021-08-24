import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../imgs/ShrtFut.png';
import Container from '@material-ui/core/Container';

const useStyle = makeStyles({
    Img: {
        position: 'fixed',
        height: '11%',
        width: '11%',
    },
    Container: {
        padding: '3vh',
        paddingLeft: '5vh',
    }
})

function VarzeaInsideLogo() {
    const classes = useStyle();
    return (
        <Container maxWidth='sm' className={classes.Container}>
            <img src={logo} className={classes.Img} alt=""/>
        </Container>
    )
}

export default VarzeaInsideLogo;