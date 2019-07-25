import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import Button from '@material-ui/core/Button';
class PaletteList extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty('--overflowStyles', 'auto');
  }

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const {
      palettes,
      classes,
      removePalette,
      deleted,
      refillPalettes
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>

            <Link className={classes.link_new} to="/palette/new">
              Create new Palette
            </Link>
          </nav>

          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleGoToPalette={() => this.goToPalette(palette.id)}
                removeSelf={() => removePalette(palette.id)}
              />
            ))}
          </div>

          <div className={classes.refillContainer}>
            {deleted && (
              <Button
                variant="contained"
                color="default"
                onClick={refillPalettes}
              >
                Refill Palettes!
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
