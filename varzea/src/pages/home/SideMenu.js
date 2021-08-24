import React from 'react';
import Grid from '@material-ui/core/Grid';
import VarzeaInsideLogo from './VarzeaInsideLogo';
import TabOptions from './TabOptions';


const SideMenu = () => {
    return (
        <Grid wrap='wrap' container direction="column" spacing={0} style={{backgroundColor: '#2F303A', height:'100%'}}>
            <Grid item xs={2} >
               <VarzeaInsideLogo />
            </Grid>
            <Grid item xs={9} >
              <TabOptions />
            </Grid>
        </Grid>
    )
}

export default SideMenu;