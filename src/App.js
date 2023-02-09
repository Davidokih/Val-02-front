import React from 'react';
import Header from './Landing/Header';
import Home from './Landing/Home';
import Pair from './Landing/Pair';
// import Private from "./Private";
import Private from './Landing/Private';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Private>
        <Header />
      </Private>


      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/pairing' element={ <Private>
          <Pair />
        </Private> } />
      </Routes>
    </BrowserRouter>


  );
};

export default App;