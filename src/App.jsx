import { useState } from 'react'
import Login from './pages/login'
import Dashboard from './pages/d_admin'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log('isLoggedIn:', isLoggedIn) // untuk debug

  return isLoggedIn
    ? <Dashboard onLogout={() => setIsLoggedIn(false)} />
    : <Login onLogin={() => setIsLoggedIn(true)} />
}