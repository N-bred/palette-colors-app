import React from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      backgroundColor: '#fff',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
         cursor: 'pointer'
      }
   },

   colors: {
      backgroundColor: '#fff',
      height: '150px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '.2rem',
      borderRadius: '5px'
   },

   title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem',
      position: 'relative',
      fontSize: '1.6rem',
      fontWeight: 'normal'
   },
   emoji: {
      marginLeft: '1rem',
      fontSize: '1.5rem'
   },
   miniBox: {
      height: '25%',
      flex: '0 0 20%',
      position: 'relative'
   }
};

function MiniPalette(props) {
   const { classes, paletteName, emoji, colors, handleGoToPalette } = props;

   const miniColorBoxes = colors.map(color => (
      <div
         key={color.name}
         style={{ background: color.color }}
         className={classes.miniBox}
      />
   ));

   return (
      <div className={classes.root} onClick={handleGoToPalette}>
         <div className={classes.colors}>
            {/* Mini boxes */}
            {miniColorBoxes}
         </div>
         <h5 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
         </h5>
      </div>
   );
}

export default withStyles(styles)(MiniPalette);
