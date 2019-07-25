import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/Typography';
export default class ColorPicker extends Component {
  render() {
    const {
      clearColors,
      randomColor,
      disabledButtons,
      handleColorChange,
      actualColor,
      createColors,
      newName,
      handleNewName,
      classes
    } = this.props;
    return (
      <>
        <Typography variant="h3" className={classes.drawerTitle}>
          Desing your palette
        </Typography>
        <div className={classes.btnsContainer}>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={randomColor}
            disabled={disabledButtons}
          >
            Random color
          </Button>
        </div>

        <ChromePicker
          onChangeComplete={handleColorChange}
          color={actualColor}
          className={classes.colorPicker}
        />

        <ValidatorForm
          onSubmit={createColors}
          className={classes.colorPickerForm}
        >
          <TextValidator
            label="Choose a name"
            value={newName}
            onChange={handleNewName}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'This field is required',
              'The color name must be unique',
              'The color must be unique'
            ]}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              background: disabledButtons ? 'grey' : actualColor,
              color: '#fff',
              margin: '1.5rem 0'
            }}
            disabled={disabledButtons}
          >
            {disabledButtons ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </>
    );
  }
}
