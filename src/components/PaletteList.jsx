import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
   render() {
      return (
         <div>
            {this.props.palettes.map(palette => {
               return (
                  <Link to={`/palette/${palette.id}`}>
                     {palette.paletteName}
                  </Link>
               );
            })}
         </div>
      );
   }
}
