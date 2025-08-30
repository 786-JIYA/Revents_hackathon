import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layouts/globals.css'
import { router } from './app/router/Routes.tsx'
import { store } from './lib/store/store.ts'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
    
   
  </StrictMode>,
)
