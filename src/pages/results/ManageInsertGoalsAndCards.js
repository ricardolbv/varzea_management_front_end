import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import InsertGoalsAndCards from './InsertGoalsAndCards';
import { createGoal, createCard } from './thunks';

function ManageInsertGoalsAndCards(props) {
    const [away, setAway] = useState({
        awayGoalAuthor : "",
        awayGoal: 0,
        awayCardPlayer: "",
        awayCardType: ""
    })

    const [home, setHome] = useState({
        homeGoalAuthor : "",
        homeGoal: 0,
        homeCardPlayer: "",
        homeCardType: ""
    })


    /**Away - Methods */
    const resetAway = type => type === 'goal' ? setAway({...away, awayGoalAuthor: "", awayGoal: 0 }) :
                                                setAway({...away, awayCardPlayer: "", awayCardType: "" })
    
    const handleSubmitGoalAway = () => {
        const body = {
            qtd : away.awayGoal,
            autor: away.awayGoalAuthor,
            time: 'Away'
        }
        props.onClickGoal(props.summary.id, body)
        resetAway('goal');
    }

    const handleSubmitCardAway = () => {
        const body = {
            tipo : away.awayCardType,
            jogador: away.awayCardPlayer,
            time: 'Away'
        }
        props.onClickCard(props.summary.id, body)
        resetAway('card');
    }

    const handleChangeAway = ({ target }) => {
        setAway({
            ...away,
            [ target.id ] : target.value
        })
    }

    function handleChangeSelectAwayCard ({ target }) {
        const _slct = target.name === "awayCardType" ? "awayCardType" : "awayCardPlayer";
            setAway({
            ...away,
            [_slct]: target.value,
        })
    }

    function handleChangeSelectAwayGoal ({ target }) {
            setAway({
            ...away,
            awayGoalAuthor: target.value,
        })
    }
    

    /**Home - Methods */
    const resetHome = type => type === 'goal' ? setHome({...home, homeGoalAuthor: "", homeGoal: 0 }) :
                                                setHome({...home, homeCardPlayer: "", homeCardType: "" })
    
    const handleSubmitGoalHome = () => {
        const body = {
            qtd : home.homeGoal,
            autor: home.homeGoalAuthor,
            time: 'Home'
        }
        props.onClickGoal(props.summary.id, body)
        resetHome('goal');
    }

    const handleSubmitCardHome = () => {
        const body = {
            tipo : home.homeCardType,
            jogador: home.homeCardPlayer,
            time: 'Home'
        }
        props.onClickCard(props.summary.id, body)
        resetHome('card');
    }

    const handleChangeHome = ({ target }) => {
        setHome({
            ...home,
            [ target.id ] : target.value
        })
    }

    function handleChangeSelectHomeCard ({ target }) {
        const _slct = target.name === "homeCardType" ? "homeCardType" : "homeCardPlayer";
            setHome({
            ...home,
            [_slct]: target.value,
        })
    }

    function handleChangeSelectHomeGoal ({ target }) {
            setHome({
            ...home,
            homeGoalAuthor: target.value,
        })
    }
    



    return (
        <InsertGoalsAndCards 
            away={away}
            onChangeAway={handleChangeAway}
            onChangeSelectAwayCard={handleChangeSelectAwayCard}
            onChangeSelectAwayGoalAuthor={handleChangeSelectAwayGoal}

            home={home}
            onChangeHome={handleChangeHome}
            onChangeSelectHomeCard={handleChangeSelectHomeCard}
            onChangeSelectHomeGoalAuthor={handleChangeSelectHomeGoal}

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
