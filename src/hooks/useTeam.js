import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function useTeam(teamId){
    const [opponent, setOpponent] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/time/'+teamId);
            setOpponent(response.data); 
        })();
    }, [teamId])

    return opponent;
}