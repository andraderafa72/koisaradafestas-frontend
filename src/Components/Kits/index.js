import React from 'react';
import './style.css';
import KitCeB from './KitCeB';
import KitCompleto from './KitCompleto';
import KitEmCasa from './KitEmCasa';
import KitFavorito from './KitFavorito';
import KitMeB from './KitMeC';
import KitVeb from './KitVeB';

export default class Kits extends React.Component {
  render() {
    return (
      <section className="kits container" id="kits">
        <h1 className="kits-title">Conheça nossos Kits!</h1>
        <h5 className="kits-subtitle">Artes personalizadas feitas com papel. Veja alguns em nossa galeria.</h5>
        <div className="row">
          <KitCompleto />
          <KitFavorito />
          <KitEmCasa />
          <KitCeB />
          <KitMeB />
          <KitVeb />
        </div>
      </section>
    );
  }
}
