import React from 'react'
import { connect } from 'react-redux'
import { TextField, Grid, Box, Typography, Button } from '@material-ui/core'

export const InsertGoalsAndCards = (props) => {
    return (
        <Grid container spacing={1} direction='row'>
            <Grid item xs={5}>
                <Box>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField type='number' variant="outlined"/>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField type='select' label='Autor do gol' select fullWidth variant="outlined">
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained'> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <TextField type='select' label='Cartão' select fullWidth variant="outlined">
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained'> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5}>
                <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <TextField type='number' variant="outlined"/>
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField type='select' label='Autor do gol' select fullWidth variant="outlined">
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained'> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs={10}>
                            <TextField type='select' label='Cartão' select fullWidth variant="outlined">
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display='flex' justifyContent='center' paddingTop={1}>
                            <Button variant='contained'> Salvar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertGoalsAndCards)
