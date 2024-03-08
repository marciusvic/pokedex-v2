import React, { useEffect, useState } from 'react'
import { PokecardComponent } from '../Pokecard/PokecardComponent'

import { style } from "./style"

import Box from '@mui/material/Box'
import { Grid } from "@mui/material"

import axios from 'axios'

export const PokemonsComponent = ({ searchTerm }) => {
    const [pokemons, setPokemons] = useState([])

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
            } catch (error) {
                console.error('Erro ao buscar os Pokémon:', error)
            }
        }
        fetchData()
    }, [])
    
    return (
        <Box>
            <Grid container spacing={2} sx={style.divGrid}>
                {pokemons
                    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(pokemon => (
                        <Grid key={pokemon.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                            <PokecardComponent name={pokemon.name} id={pokemon.id} type={pokemon.types} img={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />
                        </Grid>
                ))}
            </Grid>
        </Box>
    )
}
