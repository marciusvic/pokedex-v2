import React, { useEffect, useState } from 'react'
import { PokecardComponent } from '../Pokecard/PokecardComponent'

import Box from '@mui/material/Box'
import { Grid } from "@mui/material"
import { style } from './style'

import axios from 'axios'

export const PokemonsComponent = ({ searchTerm }) => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = []
                for (let i = 1; i <= 251; i++) {
                    promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
                }
                const responses = await Promise.all(promises)
                const data = responses.map(response => response.data)
                setPokemons(data)
                setLoading(false)
            } catch (error) {
                console.error('Erro ao buscar os Pokémon:', error)
            }
        }
        fetchData()
    }, [])
    
    return (
        <Box sx={style.root}>
            <Grid container justifyContent='space-evenly'>
                {loading ? Array.from({ length: 251 }, (_, index) => (
                    <Box key={index} sx={style.boxLoading}></Box>
                )) : pokemons
                    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(pokemon => (
                        <Box key={pokemon.id}>
                            <PokecardComponent name={pokemon.name} id={pokemon.id} type={pokemon.types} img={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />
                        </Box>
                ))}
                <Box sx={style.boxInvisible}></Box>
            </Grid>
        </Box>
    )
}
