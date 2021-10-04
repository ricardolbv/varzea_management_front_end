import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import ManageTimeFields from './ManageTimeFields';

const HomeDisplay = (props) => {
    return (
        <Box display='flex' justifyContent='center' p={2} style={{maxHeight:'80%'}}>
        <Paper elevation={3} style={{ width: '100%', height:'85vh' }}>
            <Box display='flex' justifyContent='center' p={2}>
                <ManageTimeFields />
            </Box>
       </Paper>
       </Box>
    )
}

export default HomeDisplay;