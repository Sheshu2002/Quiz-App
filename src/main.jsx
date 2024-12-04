import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Quix from './Quiz/Quix.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Quix />
  </>
  
)
