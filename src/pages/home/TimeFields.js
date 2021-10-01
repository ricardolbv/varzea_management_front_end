import React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const TimeFields = (props) => {
    return (
        <>
        <Box paddingTop={12} display="center" justifyContent="center" alignItems="center" style={{ backgroundColor: 'grey', height: '70%', width: '70%' }}>
          <Grid container direction='column' >
                <Grid item xs={6} >
                    <Box display="center" justifyContent="center" alignItems="center" style={{ backgroundColor: 'grey', height: '70%', width: '70%' }}>
                    <div> </div>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <div> </div>
                </Grid>
            </Grid>  
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFields)
