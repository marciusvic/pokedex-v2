import React from 'react';

import { NavComponent } from '../components/Nav/NavComponent';
import { PokemonsComponent } from '../components/Pokemons/PokemonsComponent';

export const Home = () => {
    return (
        <div>
            <NavComponent />
            <PokemonsComponent />
        </div>
    )
}