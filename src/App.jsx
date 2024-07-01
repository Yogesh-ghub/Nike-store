import React from 'react';
import { Cart, Footer, Navbar } from './components';
import { footerAPI } from './data/data.js';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <Outlet />
      
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;