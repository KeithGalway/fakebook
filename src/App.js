import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from 'scenes/homePage'
import LoginPage from 'scenes/loginPage'
import ProfilePage from 'scenes/profilePage'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'


const App = () => {
    return (
        <div className='app'>
            hi
        </div>
    )
}

export default App