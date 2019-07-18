import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './css/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Logo">React Palettes</div>

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

        <div className="Selection">
          <Select
            onChange={this.props.handleColorChange}
            value={this.props.format}
          >
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}
