import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { navbar } from '../constant/navbar';

function Navbar() {
    const [selectTab,setSelectTab] = useState(navbar[0].id)
    const changeTab = (id)=>{
        setSelectTab(id)
    }

  return (
    <AppBar>
        <Box sx={{display:'flex', height:'70px', alignItems:'center',justifyContent:'space-between', backgroundColor:'#C62828' }} >
            <Box>
            Left
        </Box>
        <Box sx={{display:'flex', gap:'50px',textColor:'black' }}  >
            <Tabs value={selectTab} textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example" >

            {
                navbar.map((item)=>(
                    < Tab value={item.id} onClick={()=>changeTab(item.id)}  label={
                        <strong >{item.title}</strong>
                    } key={item.id}  sx={{ fontSize:'17px',
        '&.Mui-selected': {
      color: 'black',
    },
  }}  />

                ))
            }
            </Tabs>
        </Box>
        <Box>
            <Box>
                <button>Login</button>
                
            </Box>
        </Box>
        </Box>
    </AppBar>
)
}

export default Navbar