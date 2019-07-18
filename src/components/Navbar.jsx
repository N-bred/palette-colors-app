import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './css/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">React Palettes</div>

        <div className="Slider">
          <p>
            Level: <span>{this.props.level}</span>
          </p>
          <Slider
            defaultValue={this.props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeLevel}
          />
        </div>

        <div className="modes">Modes</div>
      </div>
    );
  }
}
