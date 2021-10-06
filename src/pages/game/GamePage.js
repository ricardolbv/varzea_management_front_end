import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormNewGame from './FormNewGame';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'

const GamePage = () => {
    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Grid container spacing={2}>
            <Grid xs={10} item>
                <Box m={1} p={1}>
                    <Typography variant='h5' textAlign='center'>Marcar jogo </Typography>
                    <Divider size='medium'/>
                </Box>
            </Grid>
        <Grid container spacing={2}>
            <Grid xs={10} item>
                <FormNewGame />
            </Grid>
        </Grid>
        </Grid>
       </Paper>
       </Box>
    )
}

export default GamePage;