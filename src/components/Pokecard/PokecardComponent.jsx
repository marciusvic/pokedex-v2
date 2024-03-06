import React from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { style } from "./style"

export const PokecardComponent = ({ name, id, type, img }) => {
    return (
        <Box sx={style.root}>
            <Box>
                <Typography sx={style.name}>{name.toUpperCase()}</Typography>
                {type.map((item, index) => (
                    <Box component="span" key={index} sx={{ ...style.type, ...style[item.type.name.toLowerCase()], ... style.typeContainer }}>{item.type.name.toUpperCase()}</Box>
                ))}
                <Box component="p" sx={style.number}>#{formatId(id)}</Box>  
            </Box>
            <Box component="img" src={img} sx={style.img}/>
        </Box>
    )
}

const formatId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
}