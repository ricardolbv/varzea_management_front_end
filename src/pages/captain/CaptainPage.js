import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBarInside from '../../common/AppBarInside';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ManageForm from './ManageForm';

const CaptainPage = () => {

    return (
        <>
        <AppBarInside />
        <Box m={1} p={1}>
            <Typography variant='h4'>
                Cadastrar Capitão
            </Typography>
        </Box>
        <ManageForm />
        </>
    )
}

export default CaptainPage;