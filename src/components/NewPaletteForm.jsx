import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
   root: {
      display: 'flex'
   },
   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen
      })
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen
      })
   },
   menuButton: {
      marginRight: theme.spacing(2)
   },
   hide: {
      display: 'none'
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0
   },
   drawerPaper: {
      width: drawerWidth
   },
   drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
   },
   content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
   },
   contentShift: {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
   }
}));

export default function NewPaletteForm(props) {
   const classes = useStyles();
   const theme = useTheme();
   const [open, setOpen] = React.useState(false);
   const [actualColor, setActualColor] = React.useState('#446688');
   const [colors, setColors] = React.useState([
      { color: 'blue', name: 'blue' }
   ]);
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

   return (
      <div className={classes.root}>
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
               </ValidatorForm>
            </Toolbar>
         </AppBar>
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
                  {theme.direction === 'ltr' ? (
                     <ChevronLeftIcon />
                  ) : (
                     <ChevronRightIcon />
                  )}
               </IconButton>
            </div>
            <Divider />

            {/* Our Work Starts */}

            <Typography variant="h4">Desing your palette</Typography>

            <div>
               <Button variant="contained" color="secondary">
                  Clear Palette
               </Button>
               <Button variant="contained" color="primary">
                  Random color
               </Button>
            </div>

            <ChromePicker
               onChangeComplete={handleColorChange}
               color={actualColor}
            />

            <ValidatorForm onSubmit={createColors}>
               <TextValidator
                  value={newName}
                  onChange={handleNewName}
                  validators={[
                     'required',
                     'isColorNameUnique',
                     'isColorUnique'
                  ]}
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
                  style={{ background: actualColor }}
               >
                  Add Color
               </Button>
            </ValidatorForm>

            {/* Our Work Ends */}
         </Drawer>
         <main
            className={clsx(classes.content, {
               [classes.contentShift]: open
            })}
         >
            <div className={classes.drawerHeader} />

            {colors.map(color => (
               <DraggableColorBox
                  key={color.name}
                  color={color.color}
                  name={color.name}
                  removeSelf={removeColor}
               />
            ))}
         </main>
      </div>
   );
}
