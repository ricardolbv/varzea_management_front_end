import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Divider } from '@material-ui/core'
import ResponseComponent from './ResponseComponent'
import { connect } from 'react-redux';
import { MatchStatus } from './Constants';

import ShowGoals from './ShowGoals'


function InfoSummary(props) {
    const awayGoals = props.game.goals.filter(x => x.goalStatus === 1);
    const homeGoals = props.game.goals.filter(x => x.goalStatus === 0);
    const awayCards = props.game.cards.filter(x => x.cardStatus === 1);
    const homeCards = props.game.cards.filter(x => x.cardStatus === 0);

    const getMessage = () => {
        switch (props.status){
            case 1:
                return 'Aguardando envio de sumula por mandante!'

            case 4:
                return 'Sumula consolidada por ambas as partes. Resultado acima!'

            case 3:
                return 'Aguardando envio de resposta de sumula.'

            default:
                return ''

        }
    }

    return (
        <Grid container spacing={1}>
           <Grid item xs={1}/>
           <Grid item xs={10}>
               <Typography variant='h4'> Status: {MatchStatus[props.status]} </Typography>
               <Typography variant='body1'> {getMessage()} </Typography>
               {props.status === 3 && props.summaryPerson === 'Visitante'? <ResponseComponent gameId={props.game.id} /> : <></>}
           </Grid>
           <Grid item xs={1}/>

           {props.status === 3? 
                <Grid container spacing={1} direction='row'>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='cartão' lista={homeCards}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='gol' lista={homeGoals}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='gol' lista={awayGoals}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='cartão' lista={awayCards}/>
                    </Box>
                </Grid>
           </Grid> : <></>
            }
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    goalsAwaySummary: state.goalsAwaySummary,
    goalsHomeSummary: state.goalsHomeSummary,
    cardsHomeSummary: state.cardsHomeSummary,
    cardsAwaySummary: state.cardsAwaySummary,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(InfoSummary)