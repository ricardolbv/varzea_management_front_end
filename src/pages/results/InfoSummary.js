import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box, Divider } from '@material-ui/core'
import ResponseComponent from './ResponseComponent'
import { connect } from 'react-redux';

import ShowGoals from './ShowGoals'



function InfoSummary(props) {
    const getMessage = () => {
        switch (props.status){
            case 'criado':
                return 'Aguardando envio de sumula por mandante!'

            case 'aceito':
                return 'Sumula consolidada por ambas as partes. Resultado acima!'

            case 'enviado':
                return 'Por favor, responda a sumula enviada por mandante.'

            default:
                return ''

        }
    }

    return (
        <Grid container spacing={1}>
           <Grid item xs={1}/>
           <Grid item xs={10}>
               <Typography variant='h4'> Status: {props.status} </Typography>
               <Typography variant='body1'> {getMessage()} </Typography>
               {props.status === 'enviado' ? <ResponseComponent /> : <></>}
           </Grid>
           <Grid item xs={1}/>

           {props.status === 'aceito'? 
                <Grid container spacing={1} direction='row'>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='cartão' lista={props.cardsHomeSummary}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='gol' lista={props.goalsAwaySummary}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='gol' lista={props.goalsAwaySummary}/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' paddingTop={3}>
                        <ShowGoals tipo='cartão' lista={props.cardsAwaySummary}/>
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