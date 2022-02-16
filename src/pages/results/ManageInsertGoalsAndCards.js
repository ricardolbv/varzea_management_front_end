import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import InsertGoalsAndCards from './InsertGoalsAndCards';
import { createGoal, createCard } from './thunks';
import { useToken } from '../../auth/useToken';
import { useParams } from   'react-router';
import useGameTeamInfo from '../../hooks/useGameTeamInfo';

function ManageInsertGoalsAndCards(props) {
    const [homeId, awayId] = useGameTeamInfo(props.game.teams[0], props.game.teams[1], props.game);
    let { id } = useParams();
    const [token, setToken] = useToken(); 

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
            time: 1,
            matchId: parseInt(id),
            type: 'away'
        }
        props.onClickGoal(body, token)
        resetAway('goal');
    }

    const handleSubmitCardAway = () => {
        const body = {
            tipo : away.awayCardType,
            jogador: away.awayCardPlayer,
            time: awayId,
            status: 1,
            type: 'away',
            matchId: parseInt(id),
        }
        props.onClickCard(body, token)
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
            time: 0,
            matchId: parseInt(id),
            type: 'home'
        }
        props.onClickGoal(body, token)
        resetHome('goal');
    }

    const handleSubmitCardHome = () => {
        const body = {
            tipo : home.homeCardType,
            jogador: home.homeCardPlayer,
            time: homeId,
            status: 0,
            type: 'home',
            matchId: parseInt(id),
        }
        props.onClickCard(body, token)
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
