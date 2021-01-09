import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Cilindros from '../Icons/Cilindros';
import Vasos from '../Icons/Vasos';
import Mesas from '../Icons/Mesas';
import Painel from '../Icons/Painel';

export default class KitFavorito extends React.Component {
  render() {
    return (
      <div className=" col card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="50">
        <div className="card-body c-b">
          <div>
            <div className="icons">
              <Bandejas />
              <Cilindros />
              <strong>ou</strong>
              <Mesas />
              <Vasos />
              <Painel />
            </div>
            <h1>O mais pedido!</h1>
            <p>
              Painel redondo, artes personalizadas, bandejas das
              cores do tema da festa, vasos de flores artificiais,
              mesas decorativas ou cilindros com capas personalizadas.
            </p>
          </div>
          <a href="#" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
