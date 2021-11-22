import React, { useEffect, useState } from 'react';

export default function useMatchGoals(goals){
    var qtdGoals = 0;

    goals.forEach(gol => {
       qtdGoals += gol.quantidade
    });

    return qtdGoals;
}