import React, { useState } from 'react'

import Logo from '../../assets/pokelogo.png'

import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

import { style } from "./style"

export const NavComponent = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchSubmit = () => {
        console.log('Pesquisar por:', searchTerm)
    }

    return (
        <Box sx={style.root}>
            <Box component="img" src={Logo} alt="logo pokemon" sx={style.imgLogo} />
            <Box sx={style.search}>
                <IconButton onClick={handleSearchSubmit}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Procurar pokemon"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSearchSubmit() }}
                />
            </Box>
        </Box>
    )
}
