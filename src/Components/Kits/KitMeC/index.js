import React from 'react';
import Cilindros from '../Icons/Cilindros';
import Mesas from '../Icons/Mesas';

export default class KitCeB extends React.Component {
  render() {
    return (
      <div className=" col card">
        <div className="card-body c-b">
          <div>
            <div className="icons">
              <Cilindros />
              <Mesas />
            </div>
            <h1>Festa completa</h1>
            <p>
              Mesas decorativas diversas e(ou) cilindros com capas personalizadas.
            </p>
          </div>
          <a href="#" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
