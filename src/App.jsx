import { Footer } from "./components/Footer"
import { Categorias } from "./components/Categorias"
import { Navbar } from "./components/Navbar"
import { Productos } from "./components/Productos"
import './css/app.css'

function App() {
  return (
  <div id="app">
     <Navbar/>
     <Categorias/>
     <Productos/>
     <Footer/>
  </div>
  )
}

export default App
