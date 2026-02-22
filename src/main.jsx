import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './components/files/fetch.jsx'
// import { CheckCheck } from 'lucide-react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <Fetch/>

    {/* <Welcome name="Naomi" age={22}/>
    <Welcome name="David" age={30}/>
    <Car brand="Ford"/>
    <Input type="email"  message="Email"/>
    <Input type="password"  message="Password"/>
    <Input type="button"  message="submit"/>
    <CheckCheck className="icon"/>  */}


  </StrictMode>,
)
