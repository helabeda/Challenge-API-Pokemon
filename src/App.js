import React from 'react';
import './App.css';
import PokemonList from "./Components/Pokemon/PokemonList";
import { Switch, Route} from "react-router-dom";
import PokemonDetails from "./Components/Pokemon/PokemonDetails";

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact component={PokemonList}/>
      <Route path="/pokemon-go/:id" component={PokemonDetails}/>
    </Switch>

    </div>
  );
}

export default App;
