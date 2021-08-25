import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ShirtImg from '../../common/ShirtImg';

const useStyle = makeStyles({
    BoxIcon: {
        marginTop: '1vh',
        marginLeft: '14%',
    }
})

const AboveForm = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.BoxIcon}>
            <Grid item >
                <ShirtImg />
            </Grid>
            <Grid  >
                <Typography variant='h6' style={{paddingTop:'1vh', paddingRight: '2vh' }}> Varzea Manager </Typography>
            </Grid>
        </Grid>

    )
}

export default AboveForm;