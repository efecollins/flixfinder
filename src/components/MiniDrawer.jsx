import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const MiniDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleMiniDrawer = () => setOpen(!open);

    return (
        <>
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
