import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import ShirtImg from '../../common/ShirtImg';

const TopBar = () => {
    const history = useHistory();

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
            <Button color="inherit" style={{ position: 'fixed', left: '90%' }} onClick= {() => history.push('/howto')}>Como jogar</Button>
            <Button color="inherit" style={{ position: 'fixed', left: '85%' }} onClick= {() => history.push('/login')} >Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default TopBar;
