import React from 'react';
import whatsapp from './img/whatsapp.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import './style.css';

export default class SocialMediaButtons extends React.Component {
  render() {
    return (
      <section className="contact-us container ">
        <div>
          <ul className="social-media mx-auto my-5">
            <li>
              <a href="https://wa.me/5584996220051" target="_blank" rel="noreferrer" className="whatsapp">
                <img src={whatsapp} alt="" width="40px" height="40px" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5584996220051" target="_blank" rel="noreferrer" className="whatsapp">
                <img src={facebook} alt="" width="40px" height="40px" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5584996220051" target="_blank" rel="noreferrer" className="whatsapp">
                <img src={instagram} alt="" width="40px" height="40px" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
