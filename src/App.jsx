import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Patient from './pages/Patient'


class App extends React.Component {
  render() {
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
}

export default App;