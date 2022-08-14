import React from 'react'
import {Box,Typography,styled} from '@mui/material'

const Balancetext=styled(Typography)`
font-size:25px;
margin-bottom:20px;
`
function Balance() {
  return (
    <Box>
        <Balancetext> Balance: 100</Balancetext>
    </Box>
  )
}

export default Balance