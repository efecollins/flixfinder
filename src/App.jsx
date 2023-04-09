import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Loading from './Loading'
import MiniDrawer from './components/MiniDrawer';
import AppContent from './components/AppContent';

function App() {

   return (
      <React.Fragment>
         <CssBaseline />
         <Loading />
         <MiniDrawer />
         <AppContent />
      </React.Fragment>
   )
}

export default App
