import React from 'react'

// components
import {Box, Typography, TextField,Button,styled} from '@mui/material'

const Container =styled(Box)`
display:flex;
flex-direction:column;
& > h5,& >div ,& >button{
    margin-top:20px;
}

`
function NewTransction() {
  return (
    <Container>
        <Typography variant='h5'> Transction</Typography>
        <TextField label='Enter Expense' />
        <TextField  label='Enter Amount'/>
        <Button variant='contained' style={{marginRight:10}}>Add Transction</Button>
    </Container>
  )
}

export default NewTransction