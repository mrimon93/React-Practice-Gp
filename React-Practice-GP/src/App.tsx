// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';

const App: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemon List</Link>
            </li>
            <li>
              <Link to="/details">Pokemon Details</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/pokemon" component={PokemonList} />
        <Route
          path="/details"
          render={() => (
            <div>
              <h2>Search Pokemon Details</h2>
              <input type="text" value={pokemonName} onChange={handleInputChange} />
              <button>
                <Link to={`/details/${pokemonName}`}>Search</Link>
              </button>

              {pokemonName && <PokemonDetails pokemonName={pokemonName} />}
            </div>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
