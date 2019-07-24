import React, { Component } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteFormModal from './PaletteFormModal';

export default class PaletteFormNav extends Component {
   state = {
      open: true,
      showingForm: false,
      showingEmojiPicker: false
   };

   handleShowForm = () => {
      this.setState({
         showingForm: !this.state.showingForm,
         showingEmojiPicker: false
      });
   };

   handleShowPicker = () => {
      this.setState({ showingEmojiPicker: true });
   };

   render() {
      const {
         classes,
         handleDrawerOpen,
         savePalette,
         newPaletteName,
         handleNewPaletteName,
         history,
         open,
         handleEmoji
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
               <Toolbar className={classes.toolbar}>
                  <IconButton
                     color="inherit"
                     aria-label="Open drawer"
                     onClick={handleDrawerOpen}
                     edge="start"
                     className={clsx(classes.menuButton, open && classes.hide)}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h4" noWrap>
                     Create a Palette
                  </Typography>

                  <div className={classes.navBtns}>
                     <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.handleShowForm}
                     >
                        Save Palette
                     </Button>

                     {this.state.showingForm && (
                        <PaletteFormModal
                           savePalette={savePalette}
                           newPaletteName={newPaletteName}
                           handleNewPaletteName={handleNewPaletteName}
                           showingForm={this.state.showingForm}
                           handleShowForm={this.handleShowForm}
                           classes={classes}
                           handleShowPicker={this.handleShowPicker}
                           showingEmojiPicker={this.state.showingEmojiPicker}
                           handleEmoji={handleEmoji}
                        />
                     )}

                     <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.push('/')}
                        className={classes.goBackBtn}
                     >
                        Go back
                     </Button>
                  </div>
               </Toolbar>
            </AppBar>
         </>
      );
   }
}
