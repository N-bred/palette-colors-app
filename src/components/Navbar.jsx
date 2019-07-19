import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import './css/Navbar.css';

export default class Navbar extends Component {
   render() {
      const { level, changeLevel, handleColorChange, format } = this.props;

      const showSlider = changeLevel && (
         <div className="Slider">
            <p>
               Level: <span>{level}</span>
            </p>
            <Slider
               defaultValue={level}
               min={100}
               max={900}
               step={100}
               onAfterChange={changeLevel}
            />
         </div>
      );

      return (
         <div className="Navbar">
            <div className="Logo">
               <Link to="/">React Palettes</Link>
            </div>

            {showSlider}

            <div className="Selection">
               <Select onChange={handleColorChange} value={format}>
                  <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                  <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                  <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
               </Select>
            </div>
         </div>
      );
   }
}
