import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Apps from './apps'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)
