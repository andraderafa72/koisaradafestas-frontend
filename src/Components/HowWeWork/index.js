import React from 'react';
import image from '../HowTo/img/image.svg';
import './style.css';

export default class HowWeWork extends React.Component {
  render() {
    return (
      <section className="how-we-work" id="kits">
        <section className="container">
          {/* <h2 className="hww-bg" data-aos="fade-left"
         data-aos-duration="500">Como Trabalhamos</h2> */}
          <h1 className="how-we-work-title">Como trabalhamos?</h1>
          <h5 className="how-we-work-subtitle mx-auto">Seguimos rigorosamente as medidas impostas contra o contágio da COVID-19, de acordo com a Organização Mundial da Saúde (OMS)</h5>
          <div className="row flex-row-reverse">
            <div className="col">
              <img src={image} alt="" className="hww-img" width="100%" height="100%" />
            </div>
            <div className="col">
              <div className="hww">
                <h1>Material higienizado.</h1>
                <p>
                  Todo nosso material é higienizado com
                  álcool 70 antes e após qualquer utilização.
                </p>
              </div>
              <div className="hww">
                <h1>Montagem rápida e eficiente.</h1>
                <p>
                  Levamos cerca de 30 minutos a 90 minutos
                  para organizar tudo e você curtir sua festa.
                </p>
              </div>
              <div className="hww">
                <h1>Finalização e desmontagem.</h1>
                <p>
                  Buscamos o material ao acabar a
                  festa ou no dia seguinte.
                </p>
              </div>
            </div>

          </div>
        </section>
      </section>
    );
  }
}
