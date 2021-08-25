import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    Root: {
       position: 'fixed',
       top: '25vh'
    }
})

function TabOptions(props) {
   const classes = useStyle();
   const history = useHistory();

    return (
        <List disablePadding className={classes.Root}>
            <ListItem button id='home' name='home' onClick= {() => history.push('/home')} >
                <ListItemIcon > <HomeIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Home"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button  name='editPerfil' id='editPerfil' onClick= {() => history.push('/home/profile')} >
                <ListItemIcon > <AccountCircleOutlinedIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Editar Perfil"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button  name='minhaEquipe' id='minhaEquipe' onClick= {() => history.push('/home/myteam')}>
                <ListItemIcon> <PeopleIcon  style={{ color: "white"}} />  </ListItemIcon>
                <ListItemText primary={"Minha Equipe"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button  name='jogo' id='jogo' onClick= {() => history.push('/home/game')}>
                <ListItemIcon> <CreateOutlinedIcon  style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Marcar Jogo"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button name='resultados' id='resultados' onClick= {() => history.push('/home/results')}>
                <ListItemIcon  > <AssignmentOutlinedIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Resultados"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
            <ListItem button name='sair' id='sair' onClick= {() => history.push('/')}>
                <ListItemIcon  > <ExitToAppOutlinedIcon style={{ color: "white"}}/>  </ListItemIcon>
                <ListItemText primary={"Sair"} style={{ color: "white", width: "auto" }}/>
            </ListItem>
        </List>
    )
}

export default TabOptions;