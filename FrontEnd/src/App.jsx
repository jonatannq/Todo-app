import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/home/home.jsx'
import Login from './pages/login/login.jsx'
import Registro from './pages/registro/registro.jsx'
import Layout from './layout/layout.jsx'
import Completadas from './pages/completadas/completadas.jsx'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>

        <Route element={<Layout />}>
          <Route path="/completadas" element={<Completadas />}></Route>
          <Route path="/" element={<Home />}></Route> 
        </Route>

      </Routes>
    </BrowserRouter>

  )
  

  
}

export default App
