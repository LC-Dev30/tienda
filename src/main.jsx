import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SeccionArticulo } from './components/SeccionArticulo.jsx'
import { Carrito } from './components/Carrito.jsx'

const rutas = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
   path:'/art/:idArticulo',
   element:<SeccionArticulo/>
  },
  {
   path:'/shoppingCart',
   element:<Carrito/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={rutas}/>
  </React.StrictMode>,
)
