import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Cilindros from '../Icons/Cilindros';
import Vasos from '../Icons/Vasos';
import Mesas from '../Icons/Mesas';

export default class KitEmCasa extends React.Component {
  render() {
    return (
      <div className=" col card">
        <div className="card-body c-b">
          <div>
            <div className="icons">
              <Bandejas />
              <Cilindros />
              <strong>ou</strong>
              <Mesas />
              <Vasos />
            </div>
            <h1>Festa em casa!</h1>
            <p>
              Mesas decorativas diversas e bandejas das cores
              do tema da festa e vasos com flores artificiais.
            </p>
          </div>
          <a href="#" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
