import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './components/css/custom.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';

import CadastroEspecialidade from './components/RegisterSpecialty';

class App extends React.Component {
  render() {
    return (
      <div>
        <CadastroEspecialidade />
      </div>
    );
  }
}

export default App;