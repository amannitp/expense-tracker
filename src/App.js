import logo from './logo.svg';
import './App.css';
import {Typography,styled,Box} from '@mui/material'

// componenents
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransction from './components/NewTransction';

const Header =styled(Typography)`
  margin:10px 0;
  font-size:40px;
  color:blue;
  text-transform: uppercase
`
function App() {
  return (
    <Box className="App">
     <Header>Expense Tracker</Header>
     
     <Box>
        <Box>
          <Balance/>
          <ExpenseCard/>
          <NewTransction/>
        </Box>
        <Box></Box>
     </Box>
    </Box>
  );
}

export default App;
