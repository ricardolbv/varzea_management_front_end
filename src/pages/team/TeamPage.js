import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TeamTable from './TeamTable';
import Grid from '@material-ui/core/Grid'

const TeamPage = () => {
    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
            <Box m={1} p={1}>
                <Typography variant='h4' textAlign='center'>Minha equipe: XXXX</Typography>
            </Box>
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