import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ShirtImg from './ShirtImg';

const AppBarInside = () => {
    return (
        <div >
        <AppBar position="static" style={{ backgroundColor: '#2F303A' }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ShirtImg />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Varzea management app
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default AppBarInside;
