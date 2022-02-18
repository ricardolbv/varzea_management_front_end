import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { retrievePlaymaker } from './thunks';
import { useToken } from '../../auth/useToken';
import Typography from '@material-ui/core/Typography';

const Playmaker = (props) => {
    const [token, ] = useToken();

    useEffect(() => {
        props.onGetPlaymaker(token);
    }, [])

    return (
        <>
            <Typography variant='body1' textAlign='center'> Artilheiro: {props.playmaker.player} - {props.playmaker.count} </Typography>
        </>
    )
}

const mapStateToProps = (state) => ({
    playmaker: state.playmaker,
})

const mapDispatchToProps = dispatch => ({
    onGetPlaymaker: token => dispatch(retrievePlaymaker(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Playmaker);