import React, { useEffect, useState } from 'react';

export default function useGameTeamInfo(teamOne, teamTwo, match){
    var home  = '';
    var away = '';
   
    if (teamOne === match.homeId){
        home = teamOne.id;
        away = teamTwo.id;
    }
    else {
        home = teamTwo.id;
        away = teamOne.id;
    }

    return [home, away];
}