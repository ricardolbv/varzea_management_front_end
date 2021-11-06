import React from 'react'
import { connect } from 'react-redux'
import { Typography, Grid, Box } from '@material-ui/core'

export const GoalsFromGame = (props) => {
    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='center'>
                    <Typography variant='h6'> Equipe - Equipe B </Typography> 
                </Box>
                <Box display='flex' justifyContent='center'>
                    <Typography variant='h1'> 0 x 0 </Typography> 
                </Box>
            </Grid>
            <Grid item xs={1}/>
        </Grid>    
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsFromGame)
