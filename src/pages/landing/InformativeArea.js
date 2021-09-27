import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

const InformativeArea = () => {
    const history = useHistory();

    return (
        <Container maxWidth='lg' fixed='true' style={{ marginTop: '10vh' }}>
            <Typography align='center' variant='h4' style={{ color:'white' }}>
                Seja o manager do seu Time
            </Typography>
            <Typography align='center' variant='body1' style={{ color:'white', marginTop: '5vh'}}>
                Mantenha sua equipe e prepare-se para a temporada
            </Typography>
            <Button variant="contained" id='inscricao'
            style={{ marginTop: '25vh', marginLeft: '38vh' }} 
            onClick= {() => history.push('/register')}>
                Inscrever-se
            </Button>
        </Container>
    )
}

export default InformativeArea;

