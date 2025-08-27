import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layouts/globals.css'
import App from './app/layouts/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
