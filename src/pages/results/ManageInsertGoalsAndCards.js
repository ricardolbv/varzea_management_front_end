import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import InsertGoalsAndCards from './InsertGoalsAndCards';
import { createGoal, createCard } from './thunks';

function ManageInsertGoalsAndCards(props) {
    /**Away props*/
    const _awayGoalAuthor = useRef("");
    const _awayGoal = useRef(0);
    const _awayCardPlayer = useRef("");
    const _awayCardType = useRef("");

    /**Home props */
    const _homeGoalAuthor = useRef("");
    const _homeGoal = useRef(0);
    const _homeCardPlayer = useRef("");
    const _homeCardType = useRef("");

    /** Handler fields - Away */
    const handleChangeAwayGoal = ({ target }) => _awayGoal.current = target.value;
    const handleChangeAwayGoalAuthor = ({ target }) => _awayGoalAuthor.current = target.value;
    const handleChangeAwayCardPlayer = ({ target }) => _awayCardPlayer.current = target.value;
    const handleChangeAwayCardType = ({ target }) => _awayCardType.current = target.value;

    const handleSubmitGoalAway = () => {
        const body = {
            qtd : _awayGoal.current,
            autor: _awayGoalAuthor.current,
            time: 'Away'
        }
        props.onClickGoal(props.summary.id, body)
    }

    const handleSubmitGoalHome = () => {
        const body = {
            qtd : _homeGoal.current,
            autor: _homeGoalAuthor.current,
            time: 'Home'
        }
        props.onClickGoal(props.summary.id, body)
    }

    const handleSubmitCardHome = () => {
        const body = {
            tipo : _homeCardType.current,
            jogador: _homeCardPlayer.current,
            time: 'Home'
        }
        props.onClickCard(props.summary.id, body)
    }

    const handleSubmitCardAway = () => {
        const body = {
            tipo : _awayCardType.current,
            jogador: _awayCardPlayer.current,
            time: 'Away'
        }
        props.onClickCard(props.summary.id, body)
    }

    /** Handler fields - Home */
    const handleChangeHomeGoal = ({ target }) => _homeGoal.current = target.value;
    const handleChangeHomeGoalAuthor = ({ target }) => _homeGoalAuthor.current = target.value;
    const handleChangeHomeCardPlayer = ({ target }) => _homeCardPlayer.current = target.value;
    const handleChangeHomeCardType = ({ target }) => _homeCardType.current = target.value;



    return (
        <InsertGoalsAndCards 
            _awayGoal={_awayGoal}
            _awayGoalAuthor={_awayGoalAuthor}
            _awayCardPlayer={_awayCardPlayer}
            _awayCardType={_awayCardType}
            onChangeAwayCardPlayer={handleChangeAwayCardPlayer}
            onChangeAwayCardType={handleChangeAwayCardType}
            onChangeAwayGoal={handleChangeAwayGoal}
            onChangeAwayGoalAuthor={handleChangeAwayGoalAuthor}

            _homeGoal={_homeGoal}
            _homeGoalAuthor={_homeGoalAuthor}
            _homeCardPlayer={_homeCardPlayer}
            _homeCardType={_homeCardType}
            onChangeHomeCardPlayer={handleChangeHomeCardPlayer}
            onChangeHomeCardType={handleChangeHomeCardType}
            onChangeHomeGoal={handleChangeHomeGoal}
            onChangeHomeGoalAuthor={handleChangeHomeGoalAuthor}

            onSubmitGoalAway={handleSubmitGoalAway}
            onSubmitGoalHome={handleSubmitGoalHome}
            onSubmitCardHome={handleSubmitCardHome}
            onSubmitCardAway={handleSubmitCardAway}
            {...props}/>
    )
}

const mapStateToProps = (state) => ({
    summary: state.summary,
})

const mapDispatchToProps = dispatch => ({
    onClickGoal: (id_sumula, gol) => dispatch(createGoal(id_sumula, gol)),
    onClickCard: (id_sumula, cartao) => dispatch(createCard(id_sumula, cartao)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageInsertGoalsAndCards)
