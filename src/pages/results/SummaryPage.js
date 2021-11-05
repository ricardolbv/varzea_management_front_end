import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'

import GoalsFromGame from './GoalsFromGame';
import InsertGoalsAndCards from './InsertGoalsAndCards';
import SubmitSummary from './SubmitSummary';

import { useParams, useLocation  } from 'react-router';

const ResultsPage = () => {
    let { id } = useParams();
    const location = useLocation();

    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
        <Grid container spacing={2}>
            <Grid xs={12} item>
                <Box m={1} p={1}>
                    <Typography variant='h5' textAlign='center'> Sumula {id} </Typography>
                    <Divider size='medium'/>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid xs={1}/>
                <Grid xs={10} item>
                    <GoalsFromGame />
                    <InsertGoalsAndCards />
                    <SubmitSummary />
                </Grid>
            <Grid xs={1}/>
            </Grid>
        </Paper>
        </Box>
    )
}

export default ResultsPage;