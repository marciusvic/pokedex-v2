import React from 'react';

import { NavComponent } from '../components/Nav/NavComponent';
import { PokemonsComponent } from '../components/Pokemons/PokemonsComponent';

export const Home = ({ darkMode, setDarkMode }) => {
    return (
        <div>
            <NavComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            <PokemonsComponent />
        </div>
    )
}