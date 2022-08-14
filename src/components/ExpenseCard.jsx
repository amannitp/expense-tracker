import React from 'react'

import {Box,Card,CardContent, Typography,styled} from '@mui/material'

const Container =styled(Box)`
display:flex;
& > div{
    flex:1;
    padding:10px;
}
`
function ExpenseCard() {
  return (
    <Container>
        <Card>
            <CardContent>
                <Typography> Income</Typography>
                <Typography style={{color:'green'}}>2500</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography>Expense</Typography>
                <Typography style={{color:'red'}}>1500</Typography>
            </CardContent>
        </Card>
    </Container>
  )
}

export default ExpenseCard