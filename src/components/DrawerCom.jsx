import React from 'react'
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemButton';
import { navbar } from '../constant/navbar';
function DrawerCom({isOpen,setIsOpen}) {
  const handleNavigation = ()=>{
    setIsOpen(false)
  }
  return (
    <Drawer open={isOpen}anchor="top" onClose={()=>setIsOpen(false)} >
        <ListItem sx={{display:'flex', flexDirection:'column',backgroundColor:'#D7D7D7' }} >
          {
            navbar.map((item)=>(
              <ListItemText key={item.id} sx={{marginTop:'20px', width:'100%', display:'flex',justifyContent:'center' }} onClick={handleNavigation}  > <strong>{item.title}</strong> </ListItemText>
            ))
          }
        </ListItem>
    </Drawer>
)
}

export default DrawerCom