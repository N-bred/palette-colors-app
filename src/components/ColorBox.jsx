import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './css/ColorBox.css';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

export default class ColorBox extends Component {
   state = {
      isCopying: false
   };

   changeCopyState = () => {
      this.setState({ isCopying: true }, () => {
         setTimeout(() => {
            this.setState({ isCopying: false });
         }, 1500);
      });
   };

   render() {
      const {
         name,
         color,
         id,
         paletteId,
         showMore,
         isBig,
         goBack,
         goBackMethod
      } = this.props;
      const { isCopying } = this.state;

      const colorOfText = `${
         chroma(color).luminance() < 0.5 ? 'text-white' : 'text-black'
      }`;

      const goBackRender = !goBack ? (
         <CopyToClipboard text={color} onCopy={this.changeCopyState}>
            <div className="copy-container">
               <button className={`copy-button ${colorOfText}`}>Copy</button>
            </div>
         </CopyToClipboard>
      ) : (
         <div className="copy-container" onClick={goBackMethod}>
            <button className="goBack-button">Go Back</button>
         </div>
      );

      const showMoreRender = showMore && (
         <Link className="link-see-more" to={`/palette/${paletteId}/${id}`}>
            <span className={`see-more ${colorOfText}`}>More</span>
         </Link>
      );

      return (
         <div
            className={`${ColorBox} ${isBig && 'big'}`}
            style={{ background: color }}
         >
            <div
               style={{ background: color }}
               className={`copy-overlay ${isCopying && 'show'}`}
            />

            <div className={`copy-msg ${isCopying && 'show'} ${colorOfText}`}>
               <h1>Copied!</h1>
               <p>{color}</p>
            </div>

            {goBackRender}

            <span className={`box-name ${colorOfText}`}>{name}</span>

            {showMoreRender}
         </div>
      );
   }
}
