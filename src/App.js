import logo from './logo.svg';
import './App.css';
import {Typography,styled,Box} from '@mui/material'

// componenents
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransction from './components/NewTransction';
import Transction from './components/Transction';
import { useState } from 'react';
const Header =styled(Typography)`
  font-size:36px;
  color:blue;
  text-transform: uppercase
`

const Component=styled(Box)`
 display:flex;
 background:#fff;
 width:800px;
 padding:10px;
 border-radius:20px;
 margin :auto;
 & > div{
   height:70vh;
   width:50%;
   padding :10px;
 }
`
function App() {
  const [transtions,setTranstion]=useState([
    {id:1,text:"momos",Amount:-20},
    {id:2,text:"Salary",Amount:2000},
    {id:3,text:"Books",Amount:-200},
    {id:4,text:"Bonus",Amount:1500}
  ]);
  return (
    <Box className="App">
     <Header>Expense Tracker</Header>
     
     <Component>
        <Box>
          <Balance transtions={transtions}/>
          <ExpenseCard transtions={transtions}/>
          <NewTransction setTranstion={setTranstion}/>
        </Box>
        <Box>
          <Transction transtions={transtions} setTranstion={setTranstion}/>
        </Box>
     </Component>
    </Box>
  );
}

export default App;
