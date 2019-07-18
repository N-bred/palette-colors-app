import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './css/Palette.css';

export default class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  };

  changeLevel = level => {
    this.setState({ level });
  };

  handleColorChange = e => {
    this.setState({ format: e.target.value });
  };

  render() {
    const { level, format } = this.state;

    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleColorChange={this.handleColorChange}
          format={format}
        />

        <div className="Palette-colors">
          {this.props.palette.colors[level].map(color => (
            <ColorBox
              key={color.name}
              name={color.name}
              color={color[format]}
            />
          ))}
        </div>

        {/* Footer */}
      </div>
    );
  }
}
