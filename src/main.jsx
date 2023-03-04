import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components' // irá prover um tema
import theme from './styles/theme'
import { Details } from './pages/Details'
import GlobalStyles from './styles/global'


// por padrão, quando não dizemos qual arquivo queremos carregar,
// o index será carregado automaticamente;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Details />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
