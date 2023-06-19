import {nombresCategorias} from '../js/servicios'
import '../css/categorias.css'

export function Categorias(){

    return(
            <section className='section_categorias'>
                <ul className='list_card'>
                   {
                    nombresCategorias.map(c => (
                        <li className='p-2'>
                            <div className="c_img_and_categoria bg-white">
                                <h5 className='text-center'>{c.categoria}</h5>
                                <img style={{backgroundImage:`url('./src/assets/${c.nombreImg}')`}} className='img_categorias' alt="" />
                                <span>ver mas</span>
                            </div>
                        </li>
                    ))
                   }
                </ul>
            </section>
    )
}