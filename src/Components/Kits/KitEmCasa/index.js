import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Cilindros from '../Icons/Cilindros';
import Vasos from '../Icons/Vasos';
import Mesas from '../Icons/Mesas';

export default class KitEmCasa extends React.Component {
  render() {
    return (
      <div className=" col card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
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
              Também há a opção de escolher artigos individualmente. (Minimo de 6 itens).
            </p>
          </div>
          <a href="#how-to" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
