import React, { useState } from 'react';

import InsertGoalsAndCards from './InsertGoalsAndCards';

export default function ManageInsertGoalsAndCards(props) {
    const [awayGoal, setAwayGoal] = useState({
        autor: '',
        qtd: 0,
    }) 

    const [awayCard, setAwayCard] = useState({
        autor: '',
        tipo: '',
    })

    const [homeGoal, setHomeGoal] = useState({
        autor: '',
        qtd: 0,
    }) 

    const [homeCard, setHomeCard] = useState({
        autor: '',
        tipo: '',
    })

    /** Manager de campos */
    const handleChangeAwayGoal = ({ target }) => {
        setAwayGoal({
            ...awayGoal,
            [ target.id ]: target.value
        })
    }

    const handleChangeAwayCard = ({ target }) => {
        setAwayGoal({
            ...awayGoal,
            [ target.id ]: target.value
        })
    }

     const handleChangeHomeGoal = ({ target }) => {
        setAwayGoal({
            ...homeGoal,
            [ target.id ]: target.value
        })
    }

    const handleChangeHomeCard = ({ target }) => {
        setAwayGoal({
            ...homeGoal,
            [ target.id ]: target.value
        })
    }

    return (
        <InsertGoalsAndCards 
            awayGoal={awayGoal}
            awayCard={awayCard}
            homeGoal={homeGoal}
            homeCard={homeCard}
            onChangeAwayGoal={handleChangeAwayGoal}
            onChangeAwayCard={handleChangeAwayCard}
            onChangeHomeGoal={handleChangeHomeGoal}
            onChangeHomeCard={handleChangeHomeCard}
            {...props}/>
    )
}
