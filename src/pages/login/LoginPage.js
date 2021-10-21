import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ManageFormLogin from './ManageFormLogin';
import Contact from './Contact';
import SideImage from './SideImage';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    Above: {
        backgroundColor: "#2F303A",
        height: '50vh'
    },
    Under: {
        backgroundColor: "#ffffff",
        height: '50vh'
    }
})


function LoginPage() {
    const classes = useStyle();
    const history = useHistory();

    return (
        <>
        <Grid container direction="column" spacing={0}>
          <Grid item sm={12} xs={12} >
            <Typography component="div" className={classes.Above} />
            <ManageFormLogin />
            <SideImage />
          </Grid>
          <Grid item container sm={12} xs={12} >
            <Grid item sm={8} xs={8}>
              <Typography component="div" className={classes.Under} />
            </Grid>
            <Grid item sm={4} xs={4}>
                <Contact />
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}

export default LoginPage;