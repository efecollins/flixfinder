import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar'
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import { MdMenu } from "react-icons/md"
import Typography from "@mui/material/Typography"
import { MdSearch } from "react-icons/md"
import { MdNotifications } from "react-icons/md"
import { MdPerson2 } from "react-icons/md"

const MiniDrawer = () => {
   const [open, setOpen] = useState(false);

   const toggleMiniDrawer = () => setOpen(!open);

   return (
      <>
         <AppBar>
            <Toolbar>
               <IconButton edge="start" color="inherit" onClick={toggleMiniDrawer}>
                  <MdMenu />
               </IconButton>
               <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  My App
               </Typography>
               <IconButton color="inherit">
                  <MdSearch />
               </IconButton>
               <IconButton color="inherit">
                  <MdNotifications />
               </IconButton>
               <MdPerson2 />
            </Toolbar>
         </AppBar>
         <Toolbar />
         <Drawer variant="permanent" open={open} onClose={toggleMiniDrawer} anchor="left">
            <List>
               <ListItem>
                  Browse
               </ListItem>
               <ListItem>
                  Favourites
               </ListItem>
            </List>
         </Drawer>
      </>
   )
}

export default MiniDrawer;
