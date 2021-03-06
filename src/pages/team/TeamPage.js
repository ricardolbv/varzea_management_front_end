import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TeamTable from './TeamTable';
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const TeamPage = () => {
    const history = useHistory();

    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Grid container spacing={2}>
            <Grid xs={10} item>
                <Box m={1} p={1}>
                    <Typography variant='h5' textAlign='center'>Minha equipe </Typography>
                    <Divider size='medium'/>
                </Box>
            </Grid>
            <Grid xs={2} item display='flex' justifyContent='center'>
                <Box m={1} p={1}>
                    <Button variant='contained' onClick={ () => history.push('/home/myteam/new-player') }>
                        + Jogador
                    </Button>
                </Box>
            </Grid>
        </Grid>
            <Grid container spacing={2}>
                <Grid xs={1}/>
                    <Grid xs={10} item>
                        <TeamTable />
                    </Grid>
                <Grid xs={1}/>
            </Grid>
       </Paper>
       </Box>
    )
}

export default TeamPage;