import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details'

// por padrão, quando não dizemos qual arquivo queremos carregar,
// o index será carregado automaticamente;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>,
)
