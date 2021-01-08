import React from 'react';
import './style.css';
import icone from '../cilindros-icon.png';

export default class Cilindros extends React.Component {
  render() {
    return (
      <img src={icone} alt="" width="30px" height="50px" />
    );
  }
}
