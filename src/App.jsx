import Addnew from "./Pages/Addnew";
import Home from "./Pages/Home";
import UpdateHero from './Pages/UpdateHero'
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Addnew" element={<Addnew/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/UpdateHero/:id" element={<UpdateHero/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
