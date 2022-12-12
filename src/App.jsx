import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './components/css/custom.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';

import CadastroUsuario from './components/Registration';

class App extends React.Component {
  render() {
    return (
      <div>
        <CadastroUsuario />
      </div>
    );
  }
}

export default App;