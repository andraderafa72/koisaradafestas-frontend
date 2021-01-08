import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import './style.css';

export default class Hero extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className=" container">
          <a className="navbar-brand" href="#">Koisarada Festas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className=" collapse navbar-collapse float-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link secondary" href="#">Kits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link secondary" href="#">Preços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link secondary" href="#">Como trabalhamos</a>
              </li>
              <li className="nav-item">
                <PrimaryButton className="nav-link contato" href="#">Contato</PrimaryButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
