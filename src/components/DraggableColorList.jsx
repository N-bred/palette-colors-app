import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { withStyles } from '@material-ui/styles';
import { SortableContainer } from 'react-sortable-hoc';

const styles = {
   root: {
      height: '100vh'
   }
};

const DraggableColorList = SortableContainer(
   ({ colors, removeColor, classes }) => {
      return (
         <div className={classes.root}>
            {colors.map((color, i) => (
               <DraggableColorBox
                  index={i}
                  key={color.name}
                  color={color.color}
                  name={color.name}
                  handleClick={() => removeColor(color.name)}
               />
            ))}
         </div>
      );
   }
);

export default withStyles(styles)(DraggableColorList);
