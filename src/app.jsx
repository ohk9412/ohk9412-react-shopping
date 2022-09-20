import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Livestock from './component/livestock/livestock';
import Seafood from './component/seafood/seafood';
import Produce from './component/produce/produce';


function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
        <Routes>
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
