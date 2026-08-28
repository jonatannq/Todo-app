import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  )
  

  
}

export default App
