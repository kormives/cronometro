import React from 'react';
import Botao from '../botao';
import './style.scss';

class Formulario extends React.Component {
  render() {
    return (
      <form className='novaTarefa'>
        <div className='inputContainer'>
          <label htmlFor='tarefa'>
            Adicone um novo estudo
          </label>
          <input
            type='text'
            name='tarefa'
            id='tarefe'
            placeholder='O que você quer estudar?'
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='tempo'>
            Tempo
          </label>
          <input
            type='time'
            step='1'
            name='tempo'
            id='tempo'
            min='00:00:00'
            max='01:30:00'

          />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;