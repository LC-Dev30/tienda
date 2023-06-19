import { useEffect, useState } from "react"
import {getProductos,productosCarrito} from '../js/servicios'
import { useParams } from "react-router"
import '../css/productoId.css'
import { Navbar } from "./Navbar"

export function SeccionArticulo(){

    const {idArticulo} = useParams()
    const [producto,setProducto] = useState({});
    const [estadoProducto,setEstadoProducto] = useState(false);
    const [textButtonAddBuy,setTextButtonBuy] = useState("Agregar al Carrito")

    useEffect(() => {
       async function getProductId(){
        const data = await getProductos();
        const obj = data.find(p => p.id == parseInt(idArticulo))
        setProducto(obj)
       }
       getProductId()
    },[])

    function agregarAlCarrito(){
       productosCarrito.push(producto)
       console.log(productosCarrito);
       setEstadoProducto(true)
       setTextButtonBuy("Quitar del carrito")
    }

    return(
       <>
       <Navbar estadoCarrito={estadoProducto}/>
         <section className="seccion_productoId">
            <div className="s_img">
               <img className="img_productoId" src={`${producto.thumbnail}`} alt="" />
            </div>
            <div className="s_info">
               <span className="title">{producto.title}</span>
               <p className="text-muted">{producto.description}</p>
               <span className="text-success">{producto.category}</span>
               <span>{producto.brand}</span>
               <strong className="text-danger h5">US$ {producto.price}</strong>
               <button onClick={agregarAlCarrito}>{textButtonAddBuy}</button>
            </div>
        </section>
       </>
    )
}