import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './components/files/ref.jsx'
import Register from './components/files/reg.jsx'
import State from './components/state/input.jsx'
import Practice from './components/state/count.jsx'
import Practice3 from './components/state/form.jsx'
import Practice4 from './components/state/todo.jsx'

// import { CheckCheck } from 'lucide-react';
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <Register/>  





    {/* <Welcome name="Naomi" age={22}/>
    <Welcome name="David" age={30}/>
    <Car brand="Ford"/>
    <Input type="email"  message="Email"/>
    <Input type="password"  message="Password"/>
    <Input type="button"  message="submit"/>
    <CheckCheck className="icon"/>  */}


  </StrictMode>,
)
