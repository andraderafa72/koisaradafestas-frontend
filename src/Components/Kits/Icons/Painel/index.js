import React from 'react';
import icone from '../painel-icon.png';

export default class Painel extends React.Component {
  render() {
    return (
      <img src={icone} alt="" width="50px" height="56px" />
    );
  }
}
