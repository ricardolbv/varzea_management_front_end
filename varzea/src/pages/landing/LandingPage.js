import TopBar from './TopBar';
import PlayerImg from './PlayerImg';
import InformativeArea from './InformativeArea';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const LandingPage = () => {
    return (
        <Box height="100%" width="100%" bgcolor="#2F303A" position="absolute">
            <TopBar />
                <Grid container >
                    <Grid item xs={6} >
                        <PlayerImg />
                    </Grid>
                    <Grid item xs={6}>
                        <InformativeArea />
                    </Grid>
                </Grid>
            </Box>
    )
}

export default LandingPage;