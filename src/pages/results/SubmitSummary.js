import React from 'react'
import { connect } from 'react-redux'
import { Box, Button } from '@material-ui/core'

export const SubmitSummary = (props) => {
    return (
        <Box display='flex' justifyContent='flex-end' m={4}>
            <Button variant='contained' color="primary" style={{ backgroundColor: '#2F303A' }}> Enviar Sumula </Button>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitSummary)
