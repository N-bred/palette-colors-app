import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  state = {
    isCopying: false
  };

  componentDidMount() {
    document.documentElement.style.setProperty('--overflowStyles', 'hidden');
  }

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
      goBackMethod,
      classes
    } = this.props;
    const { isCopying } = this.state;

    const colorOfText = `${
      chroma(color).luminance() < 0.5 ? classes.textWhite : classes.textBlack
    }`;

    const goBackRender = !goBack ? (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={classes.copyContainer}>
          <button className={`${classes.copyButton} ${colorOfText}`}>
            Copy
          </button>
        </div>
      </CopyToClipboard>
    ) : (
      <div className={classes.copyContainer} onClick={goBackMethod}>
        <button className={classes.goBackButton}>Go Back</button>
      </div>
    );

    const showMoreRender = showMore && (
      <Link className={classes.linkSeeMore} to={`/palette/${paletteId}/${id}`}>
        <span className={`${classes.seeMore} ${colorOfText}`}>More</span>
      </Link>
    );

    return (
      <div
        className={`${classes.ColorBox} ${isBig && classes.ColorBoxBig}`}
        style={{ background: color }}
      >
        <div
          style={{ background: color }}
          className={`${classes.copyOverlay} ${isCopying &&
            classes.copyOverlayShow}`}
        />

        <div
          className={`${classes.copyMsg} ${isCopying &&
            classes.copyMsgShow} ${colorOfText}`}
        >
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>

        {goBackRender}

        <span className={`${classes.boxName} ${colorOfText}`}>{name}</span>

        {showMoreRender}
      </div>
    );
  }
}
export default withStyles(styles)(ColorBox);
