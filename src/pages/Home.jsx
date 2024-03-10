import React, { useState } from 'react'
import { NavComponent } from '../components/Nav/NavComponent'
import { PokemonsComponent } from '../components/Pokemons/PokemonsComponent'
import { FooterComponent } from '../components/Footer/FooterComponent'

import Box from '@mui/material/Box'

export const Home = ({ darkMode, setDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (term) => {
        setSearchTerm(term)
    }

    return (
        <Box>
            <NavComponent darkMode={darkMode} setDarkMode={setDarkMode} onSearchChange={handleSearchChange} />
            <PokemonsComponent searchTerm={searchTerm}/>
            <FooterComponent />
        </Box>
    )
}
