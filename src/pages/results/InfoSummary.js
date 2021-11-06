import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Box } from '@material-ui/core'
import ResponseComponent from './ResponseComponent'

export default function InfoSummary(props) {
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
        </Grid>
    )
}
