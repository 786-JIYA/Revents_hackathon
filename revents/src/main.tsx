import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layouts/globals.css'
import { router } from './app/router/Routes.tsx'
import App from './app/layouts/App.tsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
