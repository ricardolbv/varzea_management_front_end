import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Button } from '@material-ui/core'

import { updateSumula } from './thunks'

export const SubmitSummary = (props) => {
    const [fields, setFields] = useState({ status: 'enviado' })

    const handleSubmit = () => props.onUpdateSummary(fields, props.summary.id);

    return (
        <Box display='flex' justifyContent='flex-end' m={4}>
            <Button variant='contained' color="primary" style={{ backgroundColor: '#2F303A' }} onClick={handleSubmit}> Enviar Sumula </Button>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    summary: state.summary
})

const mapDispatchToProps = dispatch => ({
    onUpdateSummary: (fields, id) => dispatch(updateSumula(fields, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitSummary)
