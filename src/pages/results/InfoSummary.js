import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function InfoSummary(props) {
    return (
        <Grid container spacing={1}>
           <Grid item xs={1}/>
           <Grid item xs={10}>
               <Typography variant='h4'> Status: {props.status} </Typography>
               <Typography variant='body1'> {props.message} </Typography>
           </Grid>
           <Grid item xs={1}/>
        </Grid>
    )
}
