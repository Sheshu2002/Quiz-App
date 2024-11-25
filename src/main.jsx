import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Real from './Quiz/real.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Real />
  </StrictMode>,
)