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
      const { palette } = this.props;
      const colorsMap = palette.colors[level].map(color => (
         <ColorBox
            key={color.name}
            name={color.name}
            color={color[format]}
            id={color.id}
            paletteId={palette.id}
         />
      ));

      return (
         <div className="Palette">
            <Navbar
               level={level}
               changeLevel={this.changeLevel}
               handleColorChange={this.handleColorChange}
               format={format}
            />

            <div className="Palette-colors">{colorsMap}</div>

            <footer className="palette-footer">
               <h3>
                  {palette.paletteName} - {palette.emoji}
               </h3>
            </footer>
         </div>
      );
   }
}
