/* eslint-disable prefer-template */
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import './style.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className=" container">
          <a className="navbar-brand" href="#">Koisarada Festas</a>
          <button className={'navbar-toggler burger burger-squeeze mx-3' + (this.state.active ? ' open' : null)} onClick={this.toggleClass} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div className="burger-lines" />
          </button>
          <div className=" collapse navbar-collapse float-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link secondary" href="#kits">Kits</a>
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
