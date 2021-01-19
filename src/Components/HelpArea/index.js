import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import './style.css';

export default class HelpArea extends React.Component {
  render() {
    return (
      <section className="help-area">
        <div className="container h-a" data-aos="flip-down" data-aos-duration="800">
          <h3>Não é o que você procura?</h3>
          <p>Monte agora seu próprio Kit em poucos minutos</p>
          <PrimaryButton href="https://wa.me/5584996220051" target="_blank">Converse conosco</PrimaryButton>
        </div>
      </section>
    );
  }
}
