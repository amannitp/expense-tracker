import React from 'react'
import { useState } from 'react'
// components
import {Box, Typography, TextField,Button,styled} from '@mui/material'

const Container =styled(Box)`
display:flex;
flex-direction:column;
& > h5,& >div ,& >button{
    margin-top:20px;
}
`
function NewTransction({setTranstion}) {
    const [text,setText]=useState('')
    const [Amount,setAmount]=useState(0)
    const addTransction=()=>{
        const transtion={
            id:Math.floor(Math.random()*100000),
            text:text,
            Amount:+Amount
        }
        setTranstion(preState=>[transtion,...preState])
    }
  return (
    <Container>
        <Typography variant='h5'> Transction</Typography>
        <TextField label='Enter Expense' onChange={(e)=>setText(e.target.value)} />
        <TextField  label='Enter Amount' onChange={(e)=>setAmount(e.target.value)}/>
        <Button onClick={()=>addTransction()} variant='contained' style={{marginRight:10}} >Add Transction</Button>
    </Container>
  )
}

export default NewTransction