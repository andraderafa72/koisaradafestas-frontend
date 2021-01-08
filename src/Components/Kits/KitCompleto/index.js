import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Cilindros from '../Icons/Cilindros';
import Vasos from '../Icons/Vasos';
import Mesas from '../Icons/Mesas';
import Painel from '../Icons/Painel';

export default class KitCeB extends React.Component {
  render() {
    return (
      <div className=" col card">
        <div className="card-body c-b">
          <div>
            <div className="icons">
              <Bandejas />
              <Cilindros />
              <Vasos />
              <Mesas />
              <Painel />
            </div>
            <h1>Festa completa</h1>
            <p>
              Painel redondo, artes personalizadas,
              bandejas das cores do tema da festa, vasos de flores artificiais,
              mesas decorativas e cilindros com capas personalizadas.
            </p>
          </div>
          <a href="#" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
