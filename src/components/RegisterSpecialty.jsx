import React from 'react';
import Stack from '@mui/material/Stack';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Card from './Card';
import FormGroup from './FormGroup';
import FormControl from '@mui/material/FormControl';

import './css/Registration.css';

import { mensagemSucesso } from './Toastr';
import { FormControl } from '@mui/material';

class CadastroEspecialidade extends React.Component {
    state = {
        name: '',
        status: ''
      };



    cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.name} cadastrado com sucesso!`);
      };
    
    cancelar = () => {};

    render() {
        return (
            <div>
                <div className='container'>
                    <Card title='Novo Cadastro'>
                    <div className='row'>
                        <div className='col-lg-12'>
                             <div className='bs-component'>
                                <div className='block-input'>
                                    <FormGroup label='Nome: *' htmlFor='inputName'>
                                        <input
                                            type='text'
                                            id='inputName'
                                            value={this.state.name}
                                            className='form-control'
                                            name='name'
                                            onChange={(e) => this.setState({ name: e.target.value })}
                                        />
                                    </FormGroup>
                                    <FormControll>
                                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControll>
                                
                                </div>
                                    <Stack spacing={1} padding={1} direction='row'>
                                    <button
                                        onClick={this.cadastrar}
                                        type='button'
                                        className='btn btn-success'
                                    >
                                        Salvar
                                    </button>
                                    <button
                                        onClick={this.cancelar}
                                        type='button'
                                        className='btn btn-danger'
                                    >
                                        Cancelar
                                    </button>
                                    </Stack>
                             </div>
                        </div>
                    </div>
                    </Card>
                </div>
            </div>
        );
    }
}
export default CadastroEspecialidade;
