import React from 'react'
import {Box,Typography,styled} from '@mui/material'

const Balancetext=styled(Typography)`
font-size:25px;
margin-bottom:20px;
`
function Balance({transtions}) {
    const amount=transtions.map(transtion => transtion.Amount);
    const totalAmount=amount.reduce((amount,item)=>(amount+=item),0).toFixed(2);
  return (
    <Box>
        <Balancetext> Balance:₹{totalAmount}</Balancetext>
    </Box>
  )
}

export default Balance