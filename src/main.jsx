import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ButtonCrearCuenta from './buttons/ButtonCrearCuenta'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonCrearCuenta />
  </StrictMode>,
)
