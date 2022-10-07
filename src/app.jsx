import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Livestock from './component/livestock/livestock';
import Seafood from './component/seafood/seafood';
import Produce from './component/produce/produce';
import Login from './component/login/login';


function App({authService}) {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header authService={authService} />
        <Routes>
          <Route path="/login" axact element={<Login authService={authService} />} />
          <Route path={"/"} axact element={<Home />} />
          <Route path={"/livestock"} axact element={<Livestock />} />
          <Route path={"/seafood"} axact element={<Seafood />} />
          <Route path={"/produce"} axact element={<Produce />} />
       </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
    
     
};

export default App;
