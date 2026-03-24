import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './stylesheets/index.css'
// import App from './App.jsx'
import NMPF_04852 from './NMPF_04852'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NMPF_04852 />
  </StrictMode>,
)
