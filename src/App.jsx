import { Routes } from "./Routes";

import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import GlobalStyles from './styles/global'




export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

