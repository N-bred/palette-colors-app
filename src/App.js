import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
   findPaletteByid = id => {
      const finded = seedColors.find(palette => palette.id === id);
      return generatePalette(finded);
   };

   render() {
      return (
         <div>
            <Switch>
               <Route
                  exact
                  path="/"
                  render={() => <PaletteList palettes={seedColors} />}
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
