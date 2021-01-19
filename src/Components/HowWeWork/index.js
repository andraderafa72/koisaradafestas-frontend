import React from 'react';
import image from '../HowTo/img/image.svg';
import './style.css';

export default class HowWeWork extends React.Component {
  render() {
    return (
      <section className="how-we-work" id="how-we-work">
        <section className="container">
          <h1 className="how-we-work-title" data-aos="fade-left" data-aos-duration="300">Como trabalhamos?</h1>
          <h5 className="how-we-work-subtitle mx-auto" data-aos="fade-left" data-aos-duration="300">Seguimos rigorosamente as medidas impostas contra o contágio da COVID-19, de acordo com a Organização Mundial da Saúde (OMS)</h5>
          <div className="row flex-row-reverse">
            <div className="col" data-aos="fade-up" data-aos-duration="500">
              <img src={image} alt="" className="hww-img" width="100%" height="100%" />
            </div>
            <div className="col">
              <div className="hww" data-aos="fade-up" data-aos-duration="300">
                <h1>Material higienizado.</h1>
                <p>
                  Todo nosso material é higienizado com
                  álcool 70 antes e após qualquer utilização.
                </p>
              </div>
              <div className="hww" data-aos="fade-up" data-aos-duration="400">
                <h1>Montagem rápida e eficiente.</h1>
                <p>
                  Levamos cerca de 30 minutos a 90 minutos
                  para organizar tudo e você curtir sua festa.
                </p>
              </div>
              <div className="hww" data-aos="fade-up" data-aos-duration="500">
                <h1>Finalização e desmontagem.</h1>
                <p>
                  Buscamos o material ao acabar a
                  festa ou no dia seguinte.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="custom-shape-divider-bottom-1610909121">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill" />
          </svg>
        </div>
      </section>
    );
  }
}
