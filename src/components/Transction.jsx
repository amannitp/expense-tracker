import React from 'react'

import {Box,Typography,Divider,List} from '@mui/material'
import TransctionHistory from './TransctionHistory'
function Transction({transtions,setTranstion}) {
  return (
    <Box>
        <Typography variant='h4'>Transction Histrory</Typography>
        <Divider/>
        <List>
             {
                transtions.map(transtion =>(
                       <TransctionHistory transtion={transtion} setTranstion={setTranstion} transtions={transtions}/>
                ))
             }
        </List>
    </Box>
  )
}

export default Transction