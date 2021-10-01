import { React, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useLocation  } from 'react-router';

import GerenciaJogador from './GerenciarJogador'
import { newPlayer, changePlayer } from './thunks';

export const ManageGerenciaJogador = (props) => {
    let {id} = useParams();
    const location = useLocation();

    const [_plr] = props.players.filter(plr => plr.id == id);

    const [nomeValidation, setNomeValid] = useState(false);
    const [posicaoValidation, setPositionValid] = useState(false);
    const [jogador, setJogador] = useState({
        nome: id !== undefined ? _plr.nome : '',
        posicao: id !== undefined ? _plr.posicao : '',
    })

    const handleSubmit = () => {
        if (nomeIsValidated() && posicaoIsValidated()) {
            clearFields()

            location.pathname === '/home/myteam/new-player' ?
                props.createPlayer(jogador, props.captain.time.id) :
                props.updatePlayer({ 'nome': jogador.nome, 'posicao': jogador.posicao, 'id': id });
               
            }
    }

    const clearFields = () => setJogador({nome: '', posicao: ''})

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
    players: state.players,
})

const mapDispatchToProps = dispatch => ({
    createPlayer: (player, id) => dispatch(newPlayer(player, id)),
    updatePlayer: player => dispatch(changePlayer(player)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageGerenciaJogador)
