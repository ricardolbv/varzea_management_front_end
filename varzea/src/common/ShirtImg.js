import React from 'react';
import Shirt from '../imgs/ShrtFut.png'
import Container from '@material-ui/core/Container';

const ShirtImg = () => {
    return (
        <Container>
            <img src={Shirt} alt="" style={{ height:'5vh' }}/>
        </Container>
    )
}

export default ShirtImg;