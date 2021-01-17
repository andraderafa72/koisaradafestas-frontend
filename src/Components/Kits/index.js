import React from 'react';
import './style.css';
import KitCompleto from './KitCompleto';
import KitEmCasa from './KitEmCasa';
import KitFavorito from './KitFavorito';

export default class Kits extends React.Component {
  render() {
    return (
      <section className="kits container" id="kits">
        <h2 className="kits-bg" data-aos="fade-left" data-aos-duration="500">KITS</h2>
        <h1 className="kits-title">Conheça nossos Kits!</h1>
        <h5 className="kits-subtitle">Artes personalizadas feitas com papel. Veja alguns em nossa galeria.</h5>
        <div className="row">
          <KitCompleto />
          <KitFavorito />
          <KitEmCasa />
        </div>
      </section>
    );
  }
}
