import React from 'react';
import SecondaryButton from '../Buttons/SecondaryButton';
import './style.css';

export default class IdealForYou extends React.Component {
  render() {
    return (
      <section className="ideal-for-you " id="ideal-for-you">
        <div className="custom-shape-divider-top-1610393699">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill" />
          </svg>
        </div>
        <section className="container my-5 ify">
          <h2 data-aos="fade-left" data-aos-duration="500" className="title-ify-bg">Ajuda?</h2>
          <h1 className="title-ify">Qual o kit certo para você.</h1>
          <div className="row">
            <div className="col option" data-aos="fade-up" data-aos-duration="600">
              <h4>Festa Completa?</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est.
              </p>
              <SecondaryButton>Veja</SecondaryButton>
            </div>
            <div className="col option" data-aos="fade-up" data-aos-duration="800">
              <h4>O mais pedido?</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est.
              </p>
              <SecondaryButton>Veja</SecondaryButton>
            </div>
            <div className="col option" data-aos="fade-up" data-aos-duration="1000">
              <h4>Festa em casa?</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est.
              </p>
              <SecondaryButton>Veja</SecondaryButton>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
