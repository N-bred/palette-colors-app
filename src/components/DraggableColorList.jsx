import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { withStyles } from '@material-ui/styles';
import { SortableContainer } from 'react-sortable-hoc';

const styles = {
   root: {
      height: '100vh'
   }
};

const DraggableColorList = SortableContainer(props => {
   return (
      <div className={props.classes.root}>
         {props.colors.map((color, index) => (
            <DraggableColorBox
               key={color.name}
               color={color.color}
               name={color.name}
               removeSelf={props.removeColor}
               index={index}
            />
         ))}
      </div>
   );
});

export default withStyles(styles)(DraggableColorList);
