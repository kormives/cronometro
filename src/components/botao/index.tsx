import React from 'react';
import syle from './botao.module.scss';

class Botao extends React.Component<{ children: any, type?: 'button' | 'submit' | 'reset' | undefined; }> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button type={type} className={syle.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;