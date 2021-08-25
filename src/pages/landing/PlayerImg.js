import React from 'react';
import Players from '../../imgs/players.png'
import Container from '@material-ui/core/Container';

const LandingPage = () => {
    return (
        <Container style={{ marginTop:'10vh' }}>
            <img src={Players} alt="" />
        </Container>
    )
}

export default LandingPage;