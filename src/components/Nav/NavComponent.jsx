import React, { useState } from 'react'
import Logo from '../../assets/pokelogo.png'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'
import { style } from "./style"

export const NavComponent = ({ setDarkMode }) => {
    const theme = useTheme()
    const [searchTerm, setSearchTerm] = useState('')

    const handleDarkModeChange = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode)
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchSubmit = () => {
        console.log('Pesquisar por:', searchTerm)
    }

    return (
        <Box sx={style.root}>
            <Box component="img" src={Logo} alt="logo pokemon" sx={style.imgLogo} />
            <Box sx={style.boxSnS}>
                <IconButton onClick={handleDarkModeChange} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <Box sx={style.search}>
                    <IconButton onClick={handleSearchSubmit}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Search pokemon"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSearchSubmit() }}
                    />
                </Box>
            </Box>
        </Box>
    )
}
