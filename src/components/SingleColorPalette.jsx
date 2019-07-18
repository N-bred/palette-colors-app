import React, { Component } from 'react';

export default class SingleColorPalette extends Component {
   findColors = (palette, id) => {
      const palettes = [];

      for (let level in palette.colors) {
         const amix = palette.colors[level].filter(color => {
            if (color.name.includes(id)) {
               return color;
            }
            return false;
         });

         palettes.push(...amix);
      }

      console.log(palettes);
   };

   render() {
      const { palette, id } = this.props;

      this.findColors(palette, id);

      return (
         <div>
            <h1>Single collor peals</h1>
         </div>
      );
   }
}
