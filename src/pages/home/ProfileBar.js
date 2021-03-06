import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../auth/useUser';

const useStyle = makeStyles(( theme ) => ({
    Root: {
        position:'fixed',
        right: '5vh',
        paddingTop: '1vh'
    },
    Icon: {
        color: "Black",
    },
    Nome: {
        color: "#404040",
        fontWeight: 'bold'
    },
    Cargo: {
        color: "#404040",
    },

    Conta: {
        color: "#0D0B23",
    }
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


const ProfileBar = (props) => {
    const history = useHistory();
    const classes = useStyle();
    const user = useUser();

        return (
            <>
            <Box p={1} className={classes.Root} display='flex' flexDirection='row'>
                <Box display='flex' alignItems='center' p={1}>
                    <AccountCircleIcon className={classes.Icon}/>
                </Box>
                <Box display='flex' flexWrap='wrap' p={1}>
                    <Box>
                        <Typography align='left' variant='subtitle1' className={classes.Nome}> {user.unique_name} </Typography>
                        <Breadcrumbs>
                            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                                <Typography align='left' variant='subtitle2' className={classes.Conta}> Minha conta</Typography>
                            </Link>
                        </Breadcrumbs>
                    </Box>
                </Box>
            </Box>
            </>
        )
}

export default ProfileBar;