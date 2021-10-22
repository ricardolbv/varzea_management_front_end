import { React, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getTeam, updateTeam } from './thunks';

import TimeFields from './TimeFields'

const ManageTimeFields = (props) => {  
    const [nomeValidation, setNomeValid] = useState(false);
    const [modalidadeValidation, setModalidadeValid] = useState(false);
    const [diaJogoValidation, setDiaJogoValid] = useState(false);
    

    const [time, setTime] = useState({
        nome: props.team.nome === '' ? '' : props.team.nome,
        modalidade: props.team.modalidade === '' ? '' : props.team.modalidade,
        data:  props.team.data === '' ? '' : props.team.data,
        vice_capitao:  props.team.vice_capitao === '' ? '' : props.team.vice_capitao,
    })

    useEffect(() => {
       if(props.team.id != undefined)
            props.onGetEquipe(props.team.id)
    }, [])

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
                props.onUpdateEquipe(time, props.captain.time.id)
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
    onGetEquipe: id => dispatch(getTeam(id)),
    onUpdateEquipe: (equipe, id) => dispatch(updateTeam(equipe, id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ManageTimeFields);