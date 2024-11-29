import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
const Header = () => {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7q1sN4Iu_gUvkwu3Vhzy93fno3IN44QKDQ&s"
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{width: 150}} />  
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
