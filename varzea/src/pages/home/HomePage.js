import {React, useState} from 'react';
import Grid from '@material-ui/core/Grid'
import SideMenu from './SideMenu';
import { Route, Switch } from 'react-router-dom';
import HomeDisplay from './HomeDisplay';
import AppBarInside from '../../common/AppBarInside';


const HomePage = () => {
        return (
        <>
        <Grid container spacing={0} style={{height: '100vh' }}>
          <Grid item xs={2} >
                <SideMenu />
          </Grid>
          <Grid item  xs={10}>
             <AppBarInside />
             <Switch>
                <Route path="/home" exact component={HomeDisplay} />
                
             </Switch>
          </Grid>
        </Grid>
        </>
        )
}


export default HomePage;