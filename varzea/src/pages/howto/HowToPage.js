import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBarInside from '../../common/AppBarInside';

const HowToPage = () => {
    return (
        <>
        <AppBarInside />
        <Box m={1} p={1}>
            <Typography variant='h4'>
                Como Jogar
            </Typography>
        </Box>
        </>
    )
}

export default HowToPage;