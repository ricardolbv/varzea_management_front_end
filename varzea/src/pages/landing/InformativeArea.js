import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const InformativeArea = () => {
    return (
        <Container maxWidth='lg' fixed='true' style={{ marginTop: '10vh' }}>
            <Typography align='center' variant='h4' style={{ color:'white' }}>
                Seja o manager do seu Time
            </Typography>
            <Typography align='center' variant='body1' style={{ color:'white', marginTop: '5vh'}}>
                Mantenha sua equipe e prepare-se para a temporada
            </Typography>
            <Button variant="contained" style={{ marginTop: '25vh', marginLeft: '38vh' }}>
                Inscrever-se
            </Button>
        </Container>
    )
}

export default InformativeArea;

