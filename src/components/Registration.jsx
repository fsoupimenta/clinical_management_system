import React from 'react';

import Stack from '@mui/material/Stack';

import Card from './card';
import FormGroup from './FormGroup';

import { mensagemSucesso } from './toastr';

class CadastroUsuario extends React.Component {
  state = {
    name: '',
    dtNascimento: '',
    nProntuario: '',
    RG: '',
    CPF: '',
    CEP: '',
    UF: '',
    cidade: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    email: '',
    celular: '',
    Telefone: ''
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.name} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container'>
        <Card title='Cadastro de Usuário'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <div className='identificacao'>
                  <h4>Identificação</h4>
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
                  <FormGroup label='Dt. Nascimento: *' htmlFor='inputDtNascimento'>
                    <input
                      type='date'
                      id='inputDtNascimento'
                      value={this.state.dtNascimento}
                      className='form-control'
                      name='dtNascimento'
                      onChange={(e) => this.setState({ dtNascimento: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup label='N. Prontuario/CRO: *' htmlFor='inputNProntuario'>
                    <input
                      type='text'
                      id='inputNProntuario'
                      value={this.state.nProntuario}
                      className='form-control'
                      name='NProntuario'
                      onChange={(e) =>
                        this.setState({ nProntuario: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='RG: *' htmlFor='inputRG'>
                    <input
                      type='text'
                      id='inputRG'
                      value={this.state.RG}
                      className='form-control'
                      name='RG'
                      onChange={(e) =>
                        this.setState({ RG: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='CPF: *' htmlFor='inputCPF'>
                    <input
                      type='text'
                      id='inputCPF'
                      value={this.state.CPF}
                      className='form-control'
                      name='CPF'
                      onChange={(e) =>
                        this.setState({ CPF: e.target.value })
                      }
                    />
                  </FormGroup>
                </div>
                <div className='endereco'>
                  <h4>Endereço</h4>
                  <FormGroup label='CEP: *' htmlFor='inputCEP'>
                    <input
                      type='text'
                      id='inputCEP'
                      value={this.state.CEP}
                      className='form-control'
                      name='CEP'
                      onChange={(e) =>
                        this.setState({ CEP: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='UF: *' htmlFor='inputUF'>
                  <input
                    type='text'
                    id='inputUF'
                    value={this.state.UF}
                    className='form-control'
                    name='UF'
                    onChange={(e) =>
                      this.setState({ UF: e.target.value })
                    }
                  />
                  </FormGroup>
                  <FormGroup label='Cidade: *' htmlFor='inputCidade'>
                    <input
                      type='text'
                      id='inputCidade'
                      value={this.state.Cidade}
                      className='form-control'
                      name='Cidade'
                      onChange={(e) =>
                        this.setState({ Cidade: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='Logradouro: *' htmlFor='inputLogradouro'>
                    <input
                      type='text'
                      id='inputLogradouro'
                      value={this.state.Logradouro}
                      className='form-control'
                      name='Logradouro'
                      onChange={(e) =>
                        this.setState({ Logradouro: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='Número: *' htmlFor='inputNumero'>
                    <input
                      type='text'
                      id='inputNumero'
                      value={this.state.numero}
                      className='form-control'
                      name='numero'
                      onChange={(e) =>
                        this.setState({ numero: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='Bairro: *' htmlFor='inputBairro'>
                    <input
                      type='text'
                      id='inputBairro'
                      value={this.state.bairro}
                      className='form-control'
                      name='bairro'
                      onChange={(e) =>
                        this.setState({ bairro: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup label='Complemento: *' htmlFor='inputComplemento'>
                    <input
                      type='text'
                      id='inputComplemento'
                      value={this.state.nProntuario}
                      className='form-control'
                      name='Complemento'
                      onChange={(e) =>
                        this.setState({ complemento: e.target.value })
                      }
                    />
                  </FormGroup>
                </div>
                <div className='contato'>
                  <h4>Contato</h4>
                  <FormGroup label='Email: *' htmlFor='inputEmail'>
                      <input
                        type='email'
                        id='inputEmail'
                        value={this.state.email}
                        className='form-control'
                        name='email'
                        onChange={(e) => this.setState({ email: e.target.value })}
                      />
                  </FormGroup>
                  <FormGroup label='Celular: *' htmlFor='inputCelular'>
                  <input
                    type='text'
                    id='inputCelular'
                    value={this.state.celular}
                    className='form-control'
                    name='celular'
                    onChange={(e) => this.setState({ celular: e.target.value })}
                  />
                  </FormGroup>
                  <FormGroup label='Telefone: *' htmlFor='inputTelefone'>
                    <input
                      type='text'
                      id='inputTelefone'
                      value={this.state.Telefone}
                      className='form-control'
                      name='telefone'
                      onChange={(e) => this.setState({ telefone: e.target.value })}
                    />
                  </FormGroup>
                  
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
    );
  }
}

export default CadastroUsuario;