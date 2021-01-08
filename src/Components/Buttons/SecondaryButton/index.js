import React from 'react';
import './style.css';

export default class PrimaryButton extends React.Component {
  render() {
    return (
      <a className={`${this.props.className} secondary-btn`} href={this.props.href}>{this.props.children}</a>
    );
  }
}
