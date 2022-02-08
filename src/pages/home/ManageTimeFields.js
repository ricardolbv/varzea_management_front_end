import { React, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { useToken } from '../../auth/useToken';
import { getTeam, updateTeam } from './thunks';

import TimeFields from './TimeFields'

const ManageTimeFields = (props) => {  
    const [token, setToken] = useToken();  
    const [nomeValidation, setNomeValid] = useState(false);
    const [modalidadeValidation, setModalidadeValid] = useState(false);
    const [diaJogoValidation, setDiaJogoValid] = useState(false);
    
    useEffect(() => {
        props.onGetEquipe(token);
    }, [])

    const [time, setTime] = useState({
        nome: props.team.name,
        modalidade: props.team.modality,
        data: props.team.gameDay,
        vice_capitao: props.team.viceCaptain,
    })

    const handleChange = ({ target }) => {
        setValidationsToFalse();
        setTime({
            ...time,
            [ target.id ]: target.value
        })
    }

    function handleChangeSelectModalidade ({ target }) {
        setValidationsToFalse();
        setTime({
            ...time,
            modalidade: target.value,
        })
    }

    function handleChangeDiaJogo ({ target }) {
        setValidationsToFalse();
        setTime({
            ...time,
            data: target.value,
        })
    }

    function handleChangeVice ({ target }) {
        setValidationsToFalse();
        setTime({
            ...time,
            vice_capitao: target.value,
        })
    }

    const handleSubmit = () => {
        if (nomeIsValidated() && modalidadeIsValidated() && diaJogoIsValidated()) {
                props.onUpdateEquipe(time, token)
            }
    }

    /**Funções de validação de form */
    const setValidationsToFalse = () => {
        setNomeValid(false);
        setModalidadeValid(false);
        setDiaJogoValid(false);
    }

    const nomeIsValidated = () => {
        if(time.nome.length <= 2){
            setNomeValid(true);
            return false
        }

        return true;
    }

    const modalidadeIsValidated = () => {
        if(time.modalidade === ''){
            setModalidadeValid(true);
            return false
        }

        return true;
    }

    const diaJogoIsValidated = () => {
        if(time.modalidade === ''){
            setDiaJogoValid(true);
            return false
        }

        return true;
    }


    return (
        <TimeFields onHandleChange={handleChange}
                    onHandleChangeSelectModalidade={handleChangeSelectModalidade}
                    onHandleChangeDiaJogo={handleChangeDiaJogo}
                    onHandleChangeVice={handleChangeVice}
                    time={time}
                    nomeValidation={nomeValidation}
                    modalidadeValidation={modalidadeValidation} 
                    diaJogoValidation={diaJogoValidation}
                    onHandleSubmit={handleSubmit}/>
    )
}


const mapStateToProps = (state) => ({
    captain: state.captain,
    team: state.team,
})

const mapDispatchToProps = dispatch => ({
    onGetEquipe: token => dispatch(getTeam(token)),
    onUpdateEquipe: (equipe, token) => dispatch(updateTeam(equipe, token)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ManageTimeFields);