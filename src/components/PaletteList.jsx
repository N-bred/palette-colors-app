import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      backgroundColor: '#5f34af',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
   },
   link: {
      textDecoration: 'none',
      color: '#000'
   },
   container: {
      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap'
   },
   nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      color: '#fff',
      '& h1': {
         fontWeight: 'lighter'
      },
      margin: '1.5rem 0'
   },
   palettes: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,30%)',
      gridGap: '5%'
   },
   link_new: {
      color: '#fff',
      fontWeight: 'lighter',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
         textDecoration: 'underline'
      }
   }
};

class PaletteList extends Component {
   goToPalette = id => {
      this.props.history.push(`/palette/${id}`);
   };

   render() {
      const { palettes, classes } = this.props;
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
                     />
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(PaletteList);
