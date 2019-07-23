import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';

class App extends Component {
   state = {
      palettes: seedColors
   };

   findPaletteByid = id => {
      const finded = this.state.palettes.find(
         palette => palette.id.toLowerCase() === id.toLowerCase()
      );
      return generatePalette(finded);
   };

   savePalette = newPalette => {
      this.setState({ palettes: [...this.state.palettes, newPalette] });
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
