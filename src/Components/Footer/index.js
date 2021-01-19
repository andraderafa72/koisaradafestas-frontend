import React from 'react';
import './style.css';
import img from '../HowTo/img/image.svg';
import SocialMediaButtons from '../Buttons/SocialMediaButtons';

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer container" data-aos="fade-down" data-aos-duration="600">
        <div className="footer-nav">
          <nav>
            <li>
              <a href="#kits">Kits</a>
            </li>
            <li>
              <a href="#how-we-work">Como trabalhamos?</a>
            </li>
          </nav>
          <img src={img} alt="" width="150px" height="50px" />
          <nav>
            <li>
              <a href="#ideal-for-you">Qual escolher?</a>
            </li>
            <li>
              <a href="#how-to">Como agendar?</a>
            </li>
          </nav>
        </div>
        <SocialMediaButtons />
        <p>© Koisarada Festas, Inc. 2021. Simplefique sua maneira de fazer festas!!</p>
      </section>
    );
  }
}
