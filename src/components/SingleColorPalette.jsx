import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

export default class SingleColorPalette extends Component {
   state = {
      format: 'hex'
   };

   handleColorChange = e => {
      this.setState({ format: e.target.value });
   };

   handleGoBack = () => {
      this.props.history.push(`/palette/${this.props.palette.id}`);
   };

   findColors = (palette, id) => {
      const palettes = [];

      for (let level in palette.colors) {
         const singlePalette = palette.colors[level].filter(
            color => color.id.toLowerCase() === id.toLowerCase() && color
         );

         palettes.push(...singlePalette);
      }
      return palettes.slice(1);
   };

   render() {
      const { palette, id } = this.props;
      const { format } = this.state;

      const colorsRender = this.findColors(palette, id).map(color => (
         <ColorBox
            key={color.name}
            name={color.name}
            color={color[format]}
            id={color.id}
            paletteId={palette.id}
            isBig={true}
         />
      ));

      return (
         <div style={{ height: '100vh' }}>
            <Navbar
               handleColorChange={this.handleColorChange}
               format={format}
            />

            {colorsRender}

            <ColorBox
               color="#000"
               isBig={true}
               goBack={true}
               goBackMethod={this.handleGoBack}
            />

            <footer className="palette-footer">
               <h3>{`${palette.paletteName}: ${id.toUpperCase()} - ${
                  palette.emoji
               } `}</h3>
            </footer>
         </div>
      );
   }
}
