import {getProductos} from '../js/servicios'
import { useEffect, useState } from 'react'
import '../css/productos.css'
import { Link } from 'react-router-dom';


export function Productos(){

     const [productos,setProductos] = useState([]);

     useEffect(() => {
       const listaProductos = async () => {
         const res = await getProductos()
         setProductos(res)
       }
       listaProductos()
     },[])

    return(
        <section className='section_productos'>
            <h4>Articulos</h4>
            <ul className='lista_productos'>
                {
                    productos.map(p => (
                        <Link to={`/art/${p.id}`} className='card_producto'>
                            <img className='img_productos' src={p.thumbnail} alt="" />
                           <section>
                            <span className='text-muted'>{p.title}</span>
                            <span><strong>rating:</strong> {p.rating}</span>
                            <strong className='text-danger text_price'>US$ {p.price}</strong>
                           </section>
                        </Link>
                    ))
                }
            </ul>
        </section>
    )
}