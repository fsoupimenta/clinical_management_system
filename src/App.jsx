import React from 'react';
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Patient from './pages/Patient';

const App = () => {
    return ( 
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Patient' element={<Patient />} />
          </Routes>
      </BrowserRouter>
    );
}
 
export default App;