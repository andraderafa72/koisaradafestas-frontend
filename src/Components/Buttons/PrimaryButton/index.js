import React from 'react';
import './style.css';

export default class PrimaryButton extends React.Component {
  render() {
    return (
      <a className={`${this.props.className} primary-btn`} target={this.props.target} rel="noreferrer" href={this.props.href}>{this.props.children}</a>
    );
  }
}
