import React from "react"

import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'
import { style } from "./style"

export const FooterComponent = () => {
    return(
        <Box sx={style.root}>
            <Box component="a" target="_blank" href="https://github.com/marciusvic" sx={style.link}>
                <GitHubIcon sx={style.icon}/>
                marciusvic
                </Box>
        </Box>
    )
}