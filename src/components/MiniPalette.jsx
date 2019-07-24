import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPalette';
import DeleteIcon from '@material-ui/icons/Delete';

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
      <div className={classes.paletteContainer}>
         <DeleteIcon className={classes.delete} onClick={props.removeSelf} />

         <div className={classes.root} onClick={handleGoToPalette}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
               {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
         </div>
      </div>
   );
}

export default withStyles(styles)(MiniPalette);
