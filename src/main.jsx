import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx'
import './App.css';

import './index.css'
import './i18n.jsx';

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
     <HelmetProvider>
    <App />
     </HelmetProvider>
  </StrictMode> ,

)
