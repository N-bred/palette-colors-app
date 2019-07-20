import React from 'react';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import Delete from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
const styles = {
   root: {
      width: '20%',
      height: '25%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBotom: '-3.5px'
   },
   name: {
      color: props => (chroma(props.color).luminance() < 0.5 ? '#fff' : '#444'),
      fontWeight: 'normal',
      textTransform: 'uppercase',
      fontSize: '1.4rem',
      margin: '0 0 1rem 1rem'
   },
   trash: {
      textTransform: 'uppercase',
      cursor: 'pointer',
      color: 'inherit',
      zIndex: '10',
      margin: '0 1rem 1rem 0',
      fontSize: '2.4rem'
   },
   container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: '100%',
      width: '100%'
   },
   span: {
      color: props =>
         chroma(props.color).luminance() < 0.5 ? '#fff' : 'rgba(0,0,0,.5)',
      '& svg': {
         transitionProperty: ' color, transform',
         transition: '.3s ease',
         '&:hover': {
            color: 'red',
            transform: 'scale(1.6)'
         }
      }
   }
};

const DraggableColorBox = SortableElement(props => {
   const { classes, color, name, removeSelf } = props;

   const handleRemove = () => {
      removeSelf(name);
   };

   const prueba = e => {
      e.stopPropagation();

      alert('Deleted');
   };

   return (
      <div className={classes.root} style={{ backgroundColor: color }}>
         <div className={classes.container}>
            <h1 className={classes.name}> {name}</h1>

            <span className={classes.span} onClick={prueba}>
               <Delete className={classes.trash} onClick={prueba} />
            </span>
         </div>
      </div>
   );
});

export default withStyles(styles)(DraggableColorBox);
