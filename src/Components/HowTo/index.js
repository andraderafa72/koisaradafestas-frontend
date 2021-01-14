import React from 'react';
import image from './img/image.svg';
import heart from './img/heart.svg';
import message from './img/message-square.svg';
import './style.css';

export default class HowTo extends React.Component {
  render() {
    return (
      <section className="howto container" id="kits">
        {/* <h2 className="kits-bg" data-aos="fade-left" data-aos-duration="500">KITS</h2> */}
        <h1 className="howto-title">Como agendar sua festa.</h1>
        <h5 className="howto-subtitle">Artes personalizadas feitas com papel. Veja alguns em nossa galeria.</h5>
        <div className="row">
          <div className="col h-t">
            <img src={image} alt="" />
            <h1 className="howto-h1">Antes de tudo, conheça nosso acervo. </h1>
            <p className="howto-p">
              Escolha um kit de festa ou monte o seu
              <br />
              {' '}
              em nossa página.
            </p>
          </div>
          <div className="col h-t">
            <img src={heart} alt="" />
            <h1 className="howto-h1">O momento certo para contatar-nos</h1>
            <p className="howto-p">
              Agora que você escolheu o tema de sua festa e o
              tipo de decoração, manda uma mensagem para nós.
            </p>
          </div>
          <div className="col h-t">
            <img src={message} alt="" />
            <h1 className="howto-h1">Entre em contato conosco.</h1>
            <p className="howto-p">Mande uma mensagem para nós através do WhatsApp ou Instagram</p>
          </div>
        </div>
      </section>
    );
  }
}
