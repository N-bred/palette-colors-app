import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './css/ColorBox.css';

export default class ColorBox extends Component {
  state = {
    isCopying: false
  };

  changeCopyState = () => {
    this.setState({ isCopying: true }, () => {
      setTimeout(() => {
        this.setState({ isCopying: false });
      }, 1500);
    });
  };

  render() {
    const { name, color } = this.props;
    return (
      <div className="ColorBox" style={{ background: color }}>
        <div
          style={{ background: color }}
          className={`copy-overlay ${this.state.isCopying && 'show'}`}
        />

        <div className={`copy-msg ${this.state.isCopying && 'show'}`}>
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>

        <CopyToClipboard text={color} onCopy={this.changeCopyState}>
          <div className="copy-container">
            <button className="copy-button">Copy</button>
          </div>
        </CopyToClipboard>

        <span className="box-name">{name}</span>
        <span className="see-more">More</span>
      </div>
    );
  }
}
