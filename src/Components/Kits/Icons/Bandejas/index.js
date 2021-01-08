import React from 'react';
import './style.css';
import icone from '../bandejas-icon.png';

export default class Bandejas extends React.Component {
  render() {
    return (
      <img src={icone} alt="" width="40px" height="50px" />
    );
  }
}
