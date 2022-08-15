import React from 'react'
// component
import {ListItem,ListItemText,styled,ListItemIcon} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const Detail=styled(ListItem)` 
   margin-top=10px;
`
function TransctionHistory({transtion,setTranstion,transtions}) {
    const color=transtion.Amount>0 ? 'Green': 'Red'

    const deleteTransction=(id)=>{
        setTranstion(transtions.filter(transtion => transtion.id!==id))

    }
  return (
    <Detail style={{background:`${color}`,color:"white"}}>
        <ListItemIcon>
            <DeleteIcon onClick={()=>deleteTransction(transtion.id)}/>
        </ListItemIcon>
        <ListItemText>{transtion.text}</ListItemText>
        <ListItemText>{transtion.Amount}</ListItemText>
    </Detail>
  )
}

export default TransctionHistory