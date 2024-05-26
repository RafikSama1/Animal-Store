import { Routes, Route } from "react-router-dom"

/* ------ Import pages ------*/
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AnimalsList from "./pages/AnimalsList"
import Animal from "./pages/Animal"
import NotFound from "./pages/NotFound"
import Layout from "./Layout"
import Create from "./pages/Create"
import Edit from './pages/Edit'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/animals" element={<AnimalsList/>}/>
          <Route path="/animals/:id" element={<Animal/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
