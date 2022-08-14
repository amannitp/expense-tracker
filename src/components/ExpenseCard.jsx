import React from 'react'

import {Box,Card,CardContent, Typography} from '@mui/material'
function ExpenseCard() {
  return (
    <Box>
        <Card>
            <CardContent>
                <Typography> Income</Typography>
                <Typography>2500</Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default ExpenseCard