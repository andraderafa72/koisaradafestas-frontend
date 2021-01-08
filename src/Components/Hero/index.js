import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import './style.css';

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <h1>Simplefique sua maneira de fazer festas!</h1>
        <p>
          A Koisarada Festas esta aqui para te proporcionar a
          melhor experiênica com sua festa, do inicio ao fim.
        </p>
        <div className="buttons">
          <PrimaryButton href="#">Fale Conosco!</PrimaryButton>
          <SecondaryButton href="#">Veja Mais</SecondaryButton>
        </div>
        <div className="img-hero" />
      </section>
    );
  }
}