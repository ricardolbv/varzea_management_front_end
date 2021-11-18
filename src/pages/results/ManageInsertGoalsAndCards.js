import React, { useState, useRef } from 'react';

import InsertGoalsAndCards from './InsertGoalsAndCards';

export default function ManageInsertGoalsAndCards(props) {
    const _awayGoalAuthor = useRef("");
    const _awayGoal = useRef(0);

    /** Handler fields */
    const handleChangeAwayGoal = ({ target }) => _awayGoal.current = target.value;
    const handleChangeAwayGoalAuthor = ({ target }) => _awayGoalAuthor.current = target.value;
     

    return (
        <InsertGoalsAndCards 
            _awayGoal={_awayGoal}
            _awayGoalAuthor={_awayGoalAuthor}
            onChangeAwayGoal={handleChangeAwayGoal}
            onChangeAwayGoalAuthor={handleChangeAwayGoalAuthor}
            {...props}/>
    )
}
