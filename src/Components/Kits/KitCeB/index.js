import React from 'react';
import Bandejas from '../Icons/Bandejas';
import Cilindros from '../Icons/Cilindros';
import Vasos from '../Icons/Vasos';

export default class KitCeB extends React.Component {
  render() {
    return (
      <div className=" col card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
        <div className="card-body c-b">
          <div>
            <div className="icons">
              <Bandejas />
              <Cilindros />
              <Vasos />
            </div>
            <h1>Cilindros e bandejas</h1>
            <p>
              Cilindros com capas personalizadas, bandejas das cores
              do tema da festa, e vasos com flores artificiais.
            </p>
          </div>
          <a href="#" className="discover">Descobrir</a>
        </div>
      </div>
    );
  }
}
