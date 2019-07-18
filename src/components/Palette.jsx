import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './css/Palette.css';

export default class Palette extends Component {
  state = {
    level: 500
  };

  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    return (
      <div className="Palette">
        <Navbar level={this.state.level} changeLevel={this.changeLevel} />

        <div className="Palette-colors">
          {this.props.palette.colors[this.state.level].map(color => (
            <ColorBox key={color.name} name={color.name} color={color.hex} />
          ))}
        </div>

        {/* Footer */}
      </div>
    );
  }
}
