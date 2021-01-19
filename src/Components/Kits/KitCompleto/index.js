import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Cilindros from '../Icons/Cilindros';
import Vasos from '../Icons/Vasos';
import Mesas from '../Icons/Mesas';
import Painel from '../Icons/Painel';

export default class KitCeB extends React.Component {
  render() {
    return (
      <div className=" col card" data-aos="fade-up" data-aos-duration="600" data-aos-delay="50">
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
              bandejas das cores do tema da festa, balões decorativos, vasos de flores artificiais,
              mesas decorativas e cilindros com capas personalizadas.
            </p>
          </div>
          <a href="#how-to" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
