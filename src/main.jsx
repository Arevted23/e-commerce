import ButtonCrearCuenta from "./buttons/button-crear-cuenta"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>E- commerce proyecto en cero
      <ButtonCrearCuenta></ButtonCrearCuenta>
    </div>
  </StrictMode>,
)
