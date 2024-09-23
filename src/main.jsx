import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Base from './Base'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Base></Base>
  </StrictMode>,
)
