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
                    <Box key={index} component="span" sx={style.type}>{item.type.name.toUpperCase()}</Box>
                ))}
                <Box component="p">#{id}</Box>  
            </Box>
            <Box component="img" src={img} sx={style.img}/>
        </Box>
    )
}
