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
      palettes: this.validateLSPalettes(),
      deleted: this.validateLSDeleted()
    };
    this.validateLS = this.validateLSPalettes.bind(this);
    this.validateLS = this.validateLSDeleted.bind(this);
  }

  validateLSPalettes() {
    if (localStorage.getItem('palettes')) {
      return JSON.parse(localStorage.getItem('palettes'));
    } else {
      return seedColors;
    }
  }

  validateLSDeleted() {
    if (localStorage.getItem('deleted')) {
      return JSON.parse(localStorage.getItem('deleted'));
    } else {
      return false;
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
    if (localStorage.getItem('newPalettes')) {
      const newPalettes = [
        ...JSON.parse(localStorage.getItem('newPalettes')),
        newPalette
      ];
      localStorage.setItem('newPalettes', JSON.stringify([...newPalettes]));
    } else {
      localStorage.setItem('newPalettes', JSON.stringify([newPalette]));
    }

    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };

  removePalette = id => {
    const newPalettes = this.state.palettes.filter(
      palette => palette.id !== id
    );
    this.setState(() => ({ palettes: newPalettes, deleted: true }));
    localStorage.setItem('deleted', true);
  };

  refillPalettes = () => {
    this.setState(() => {
      if (localStorage.getItem('newPalettes')) {
        return {
          palettes: [
            ...seedColors,
            ...JSON.parse(localStorage.getItem('newPalettes'))
          ],
          deleted: false
        };
      } else {
        return { palettes: [...seedColors], deleted: false };
      }
    });
    localStorage.setItem('deleted', false);
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
                deleted={this.state.deleted}
                refillPalettes={this.refillPalettes}
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
                palette={this.findPaletteByid(routeProps.match.params.id)}
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
