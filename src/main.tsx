import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter basename="/nikhil-portfolio">
      <App />
    </BrowserRouter>
    </ThemeProvider>
  
  </StrictMode>,
)
