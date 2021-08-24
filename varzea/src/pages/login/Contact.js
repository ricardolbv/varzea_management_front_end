import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles({
    Box: {
       backgroundColor: "white"
    },
    GreyText: {
        color: "#9B9B9B",
        font: "Roboto"
    },
    Button: {
        marginTop: '15px'
    }
})

function Contact() {
    const classes = useStyle();
    return (
        <Box color="grey" className={classes.Box} m={4}>
            <Typography className={classes.GreyText} variant='h6'> Qualquer dúvida!</Typography>
            <Button variant="contained" className={classes.Button}>Contato</Button>
        </Box>
    )
}

export default Contact;