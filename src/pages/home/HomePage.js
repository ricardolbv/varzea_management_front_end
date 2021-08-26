import { React } from 'react';
import Grid from '@material-ui/core/Grid'
import SideMenu from './SideMenu';
import { Route, Switch } from 'react-router-dom';

import AppBarInside from './AppBarInside';
import HomeDisplay from './HomeDisplay';
import ProfilePage from '../profile/ProfilePage';
import TeamPage from '../team/TeamPage';
import GamePage from '../game/GamePage';
import ResultsPage from '../results/ResultsPage';


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
                <Route path="/home/profile" exact component={ProfilePage} />
                <Route path="/home/myteam" exact component={TeamPage} />
                <Route path="/home/game" exact component={GamePage} />
                <Route path="/home/results" exact component={ResultsPage} />
             </Switch>
          </Grid>
        </Grid>
        </>
      )
}


export default HomePage;