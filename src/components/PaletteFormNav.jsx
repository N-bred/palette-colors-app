import React, { Component } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class PaletteFormNav extends Component {
   state = {
      open: true
   };
   render() {
      const {
         classes,
         handleDrawerOpen,
         savePalette,
         newPaletteName,
         handleNewPaletteName,
         history,
         open
      } = this.props;

      return (
         <>
            <CssBaseline />
            <AppBar
               color="default"
               position="fixed"
               className={clsx(classes.appBar, {
                  [classes.appBarShift]: open
               })}
            >
               <Toolbar>
                  <IconButton
                     color="inherit"
                     aria-label="Open drawer"
                     onClick={handleDrawerOpen}
                     edge="start"
                     className={clsx(classes.menuButton, open && classes.hide)}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap>
                     Persistent drawer
                  </Typography>

                  <ValidatorForm onSubmit={savePalette}>
                     <TextValidator
                        label="Palette Name"
                        value={newPaletteName}
                        onChange={handleNewPaletteName}
                        validators={['required', 'isPaletteNameUnique']}
                        errorMessages={[
                           'This field is required',
                           'Palettes need to have an unique name'
                        ]}
                     />

                     <Button variant="contained" color="primary" type="submit">
                        Save Palette
                     </Button>

                     <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.push('/')}
                     >
                        Go back
                     </Button>
                  </ValidatorForm>
               </Toolbar>
            </AppBar>
         </>
      );
   }
}
