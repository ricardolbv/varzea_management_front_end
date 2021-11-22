import React, { useEffect, useState } from 'react';

export default function useGameTeamInfo(teamOne, teamTwo, match){
    var home  = '';
    var away = '';
   
    if (teamOne === match.id_mando){
        home = teamOne;
        away = teamTwo;
    }
    else {
        home = teamTwo;
        away = teamOne;
    }

    return [home, away];
}