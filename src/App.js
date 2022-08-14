import logo from './logo.svg';
import './App.css';
import {Typography,styled,Box} from '@mui/material'

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
    </Box>
  );
}

export default App;
