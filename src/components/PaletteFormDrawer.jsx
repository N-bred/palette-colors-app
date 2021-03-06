import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ColorPicker from './ColorPicker';

export default class PaletteFormDrawer extends Component {
   render() {
      const {
         classes,
         open,
         handleDrawerClose,
         clearColors,
         randomColor,
         disabledButtons,
         handleColorChange,
         actualColor,
         createColors,
         newName,
         handleNewName
      } = this.props;
      return (
         <>
            <Drawer
               className={classes.drawer}
               variant="persistent"
               anchor="left"
               open={open}
               classes={{
                  paper: classes.drawerPaper
               }}
            >
               <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                     <ChevronLeftIcon />
                  </IconButton>
               </div>
               <Divider />

               {/* Our Work Starts */}

               <div className={classes.colorPickerContainer}>
                  <ColorPicker
                     clearColors={clearColors}
                     randomColor={randomColor}
                     disabledButtons={disabledButtons}
                     handleColorChange={handleColorChange}
                     actualColor={actualColor}
                     createColors={createColors}
                     newName={newName}
                     handleNewName={handleNewName}
                     classes={classes}
                  />
               </div>

               {/* Our Work Ends */}
            </Drawer>
         </>
      );
   }
}
