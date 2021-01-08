import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Vasos from '../Icons/Vasos';

export default class KitCeB extends React.Component {
  render() {
    return (
      <div className=" col card">
        <div className="card-body c-b">
          <div>
            <div className="icons">
              <Bandejas />
              <Vasos />
            </div>
            <h1>Vasos e bandejas.</h1>
            <p>
              Bandejas decorativas das cores do tema da festa, quantidade minima de 6 peças.
            </p>
          </div>
          <a href="#" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
