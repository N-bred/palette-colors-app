import React, { useEffect } from 'react';
import clsx from 'clsx';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm } from 'react-material-ui-form-validator';
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import useStyles from './styles/NewPaletteFormStyles';
import PaletteFromDrawer from './PaletteFormDrawer';

export default function NewPaletteForm(props) {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
   const [actualColor, setActualColor] = React.useState('#446688');
   const [colors, setColors] = React.useState(props.palettes[0].colors);
   const [newName, setNewName] = React.useState('');
   const [newPaletteName, setNewPaletteName] = React.useState('');

   useEffect(() => {
      ValidatorForm.addValidationRule('isColorNameUnique', value =>
         colors.every(color => color.name.toLowerCase() !== value.toLowerCase())
      );

      ValidatorForm.addValidationRule('isColorUnique', () =>
         colors.every(color => color.color !== actualColor)
      );

      ValidatorForm.addValidationRule('isPaletteNameUnique', () =>
         props.palettes.every(
            palette =>
               palette.paletteName.toLowerCase() !==
               newPaletteName.toLowerCase()
         )
      );
   });

   function handleDrawerOpen() {
      setOpen(true);
   }

   function handleDrawerClose() {
      setOpen(false);
   }

   function handleColorChange(e) {
      setActualColor(e.hex);
   }

   function createColors() {
      const newColor = { color: actualColor, name: newName };

      setColors([...colors, newColor]);
      setActualColor('#446688');
      setNewName('');
   }

   function handleNewName(e) {
      setNewName(e.target.value);
   }
   function handleNewPaletteName(e) {
      setNewPaletteName(e.target.value);
   }

   function removeColor(name) {
      setColors([...colors.filter(color => color.name !== name)]);
   }

   function savePalette() {
      const newPalette = {
         paletteName: newPaletteName,
         id: newPaletteName.toLowerCase().replace(/ /g, '-'),
         emoji: '🤙',
         colors
      };
      props.savePalette(newPalette);

      props.history.push('/');
   }

   const onSortEnd = ({ oldIndex, newIndex }) => {
      const oldColors = colors;
      setColors([...arrayMove(oldColors, oldIndex, newIndex)]);
   };

   const clearColors = () => {
      setColors([]);
   };

   const randomColor = () => {
      const allColors = props.palettes.map(p => p.colors).flat();
      const randomNumber = ~~(Math.random() * allColors.length);
      const randomColor = allColors[randomNumber];

      setColors([...colors, randomColor]);
   };

   const disabledButtons = colors.length === props.maxColors ? true : false;

   return (
      <div className={classes.root}>
         <PaletteFormNav
            classes={classes}
            handleDrawerOpen={handleDrawerOpen}
            savePalette={savePalette}
            newPaletteName={newPaletteName}
            handleNewPaletteName={handleNewPaletteName}
            history={props.history}
            open={open}
         />

         <PaletteFromDrawer
            classes={classes}
            open={open}
            handleDrawerClose={handleDrawerClose}
            clearColors={clearColors}
            randomColor={randomColor}
            disabledButtons={disabledButtons}
            handleColorChange={handleColorChange}
            actualColor={actualColor}
            createColors={createColors}
            newName={newName}
            handleNewName={handleNewName}
         />

         <main
            className={clsx(classes.content, {
               [classes.contentShift]: open
            })}
         >
            <div className={classes.drawerHeader} />

            <DraggableColorList
               colors={colors}
               removeColor={removeColor}
               axis="xy"
               onSortEnd={onSortEnd}
            />
         </main>
      </div>
   );
}
