import Home from "./Pages/HomePage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PaginaDeAmigos from "./Pages/PaginaDeAmigos"
import Login from "./Pages/Login"
import PropsPage from "./Pages/PropsPage/PropsPage"

function App() {

  return (
    <>  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/amigos/outraRota" element={<PaginaDeAmigos />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/props" element={<PropsPage />}/>
        <Route path="/exemplo" element={<PropsPage />}/>
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
