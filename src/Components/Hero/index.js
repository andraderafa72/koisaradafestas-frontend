import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import './style.css';

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero color-change-2x">
        <div className="hero-itens">
          <h1 data-aos="fade-up" data-aos-duration="900">Simplefique sua maneira de fazer festas!</h1>
          <p data-aos="fade-up" data-aos-duration="700">
            A Koisarada Festas esta aqui para te proporcionar a
            melhor experiênica com sua festa, do inicio ao fim.
          </p>
          <div className="buttons">
            <PrimaryButton href="#how-to">Fale Conosco!</PrimaryButton>
            <SecondaryButton href="#kits">Veja Mais</SecondaryButton>
          </div>
        </div>

        <div className="img-hero" />

      </section>
    );
  }
}
