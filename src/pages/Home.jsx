import React, { useState } from 'react'
import { NavComponent } from '../components/Nav/NavComponent'
import { PokemonsComponent } from '../components/Pokemons/PokemonsComponent'

export const Home = ({ darkMode, setDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (term) => {
        setSearchTerm(term)
    }

    return (
        <div>
            <NavComponent darkMode={darkMode} setDarkMode={setDarkMode} onSearchChange={handleSearchChange} />
            <PokemonsComponent searchTerm={searchTerm} />
        </div>
    )
}
