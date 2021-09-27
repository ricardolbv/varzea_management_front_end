import { React, useState } from 'react'
import { connect } from 'react-redux'

import GerenciaJogador from './GerenciarJogador'
import { newPlayer } from './thunks';

export const ManageGerenciaJogador = (props) => {

    const [nomeValidation, setNomeValid] = useState(false);
    const [posicaoValidation, setPositionValid] = useState(false);
    const [jogador, setJogador] = useState({
        nome: '',
        posicao: '',
    })

    const handleSubmit = () => {
        if (nomeIsValidated() && posicaoIsValidated()) {
               props.createPlayer(jogador, props.captain.time.id)
            }
    }

    const setValidationsToFalse = () => {
        setNomeValid(false);
        setPositionValid(false);
    }

    const handleChange = ({ target }) => {
        setValidationsToFalse();
        setJogador({
            ...jogador,
            [ target.id ]: target.value
        })
    }

    function handleChangeSelect ({ target }) {
        setValidationsToFalse();
        setJogador({
            ...jogador,
            posicao: target.value,
        })
    }

    const nomeIsValidated = () => {
        if(jogador.nome.length <= 2){
            setNomeValid(true);
            return false
        }

        return true;
    }

    const posicaoIsValidated = () => {
        if(jogador.posicao === ''){
            setPositionValid(true);
            return false
        }

        return true;
    }


    return (
        <>
            <GerenciaJogador onHandleChange={handleChange}
                             onHandleSubmit={handleSubmit}
                             onHandleSelect={handleChangeSelect}
                             jogador={jogador}
                             nomeValidation={nomeValidation}
                             posicaoIsValidated={posicaoValidation}/>  
        </>
    )
}

const mapStateToProps = (state) => ({
    captain: state.captain,
})

const mapDispatchToProps = {
    createPlayer: (player, id) => newPlayer(player, id),
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGerenciaJogador)
