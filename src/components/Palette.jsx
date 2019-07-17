import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
            {/* Navbar */}

            <Slider
               defaultValue={this.state.level}
               min={100}
               max={900}
               step={100}
               onAfterChange={this.changeLevel}
            />

            <div className="Palette-colors">
               {this.props.palette.colors[this.state.level].map(color => (
                  <ColorBox
                     key={color.name}
                     name={color.name}
                     color={color.hex}
                  />
               ))}
            </div>

            {/* Footer */}
         </div>
      );
   }
}
