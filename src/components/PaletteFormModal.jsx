import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteFormModal(props) {
   const {
      savePalette,
      newPaletteName,
      handleNewPaletteName,
      showingForm: open,
      handleShowForm,
      classes,
      handleShowPicker,
      showingEmojiPicker,
      handleEmoji
   } = props;

   function handleClose() {
      handleShowForm();
   }

   function nextStep() {
      handleShowPicker();
   }

   function handleSelectEmoji(emoji) {
      handleEmoji(emoji);
   }

   return (
      <div>
         {showingEmojiPicker ? (
            <Dialog open={showingEmojiPicker} onClose={handleClose}>
               <DialogTitle
                  id="form-dialog-title"
                  className={classes.modalTitle}
                  variant="h2"
                  style={{ textAlign: 'center' }}
               >
                  Pick an emoji for your Palette
               </DialogTitle>
               <DialogContent>
                  <Picker set="twitter" onSelect={handleSelectEmoji} />
               </DialogContent>
               <DialogActions>
                  <Button color="primary" onClick={savePalette}>
                     Save
                  </Button>
               </DialogActions>
            </Dialog>
         ) : (
            <Dialog
               open={open}
               onClose={handleClose}
               aria-labelledby="form-dialog-title"
            >
               <DialogTitle
                  id="form-dialog-title"
                  className={classes.modalTitle}
                  variant="h2"
               >
                  New Palette
               </DialogTitle>
               <ValidatorForm onSubmit={nextStep}>
                  <DialogContent>
                     <DialogContentText variant="h5">
                        Please enter a name for you new palette. Make sure it's
                        unique!
                     </DialogContentText>

                     <TextValidator
                        label="Palette Name"
                        value={newPaletteName}
                        onChange={handleNewPaletteName}
                        validators={['required', 'isPaletteNameUnique']}
                        className={classes.modalInput}
                        fullWidth
                        autoFocus
                        errorMessages={[
                           'This field is required',
                           'Palettes need to have an unique name'
                        ]}
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button onClick={handleClose} color="primary">
                        Cancel
                     </Button>
                     <Button color="primary" type="submit">
                        Next
                     </Button>
                  </DialogActions>
               </ValidatorForm>
            </Dialog>
         )}
      </div>
   );
}
