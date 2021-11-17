import React, { useEffect, useState } from 'react';

export default function useSummary(teamId, match){
    var whatIam = '';
   
    teamId === match.id_mando ? whatIam = 'Mandante' : whatIam = 'Visitante'
   

    return whatIam;
}