import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Perfil from './Perfil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Perfil/>
  </StrictMode>,
)
