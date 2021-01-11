import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import './style.css';

export default class HelpArea extends React.Component {
  render() {
    return (
      <section className="help-area">
        <div className="container h-a">
          <h3>Não é o que você procura?</h3>
          <p>Monte agora seu próprio Kit em poucos minutos</p>
          <PrimaryButton>Converse conosco</PrimaryButton>
        </div>
      </section>
    );
  }
}
