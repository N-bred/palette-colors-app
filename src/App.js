import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         palettes: this.validateLS()
      };
      this.validateLS = this.validateLS.bind(this);
   }

   validateLS() {
      if (localStorage.getItem('palettes')) {
         return JSON.parse(localStorage.getItem('palettes'));
      } else {
         return seedColors;
      }
   }

   componentDidMount() {
      localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
   }

   componentDidUpdate() {
      localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
   }

   findPaletteByid = id => {
      const finded = this.state.palettes.find(
         palette => palette.id.toLowerCase() === id.toLowerCase()
      );
      return generatePalette(finded);
   };

   savePalette = newPalette => {
      this.setState({ palettes: [...this.state.palettes, newPalette] });
   };

   removePalette = id => {
      const newPalettes = this.state.palettes.filter(
         palette => palette.id !== id
      );
      this.setState(() => ({ palettes: newPalettes }));
   };

   render() {
      return (
         <div>
            <Switch>
               <Route
                  exact
                  path="/"
                  render={routerProps => (
                     <PaletteList
                        palettes={this.state.palettes}
                        removePalette={this.removePalette}
                        {...routerProps}
                     />
                  )}
               />

               <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                     <NewPaletteForm
                        savePalette={this.savePalette}
                        {...routeProps}
                        palettes={this.state.palettes}
                        maxColors={20}
                     />
                  )}
               />

               <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                     <Palette
                        palette={this.findPaletteByid(
                           routeProps.match.params.id
                        )}
                     />
                  )}
               />

               <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                     <SingleColorPalette
                        palette={this.findPaletteByid(
                           routeProps.match.params.paletteId
                        )}
                        {...routeProps}
                        id={routeProps.match.params.colorId.toLowerCase()}
                     />
                  )}
               />

               <Route path="" />
            </Switch>

            {/* <div className="App">
               
               <Palette palette={this.findPaletteByid('flat-ui-colors-v1')} />
            </div> */}
         </div>
      );
   }
}

export default App;
