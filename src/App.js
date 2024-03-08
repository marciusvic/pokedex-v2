import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Home } from './pages/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

export default App;
