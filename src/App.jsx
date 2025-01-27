import { useState } from 'react'
import Landing from './Pages/Landing'
import ReactDOM from 'react-dom';
import Header from './components/LandingComponents/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        
      </Routes>
    </Router>
      
    </>
  )
}

export default App
