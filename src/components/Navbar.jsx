
import { useEffect, useRef } from 'react';
import '../css/navbar.css';
import { productosCarrito } from '../js/servicios';
import { Link,useNavigate } from 'react-router-dom';

export function Navbar({estadoCarrito}){

  const ruta = useNavigate();

  useEffect(() => {
    menuLateral.current.hidden = true;
  },[estadoCarrito])

    const menuLateral = useRef()
   
    function openNavLateral(){
      menuLateral.current.hidden = false;
    }
    
    function closeNavLateral(){
        menuLateral.current.hidden = true;
    }

    return(
        <header className="header">
            <nav className="nav">
               <ul ref={menuLateral} className='list_items'>
                <li>
                   <svg onClick={closeNavLateral} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </li>
                 <li>
                 <button className='btn-cuenta'>
                  <svg width={25} fill="rgb(83, 101, 99)" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>user</title> <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path> </g></svg>
                    <span>Mi cuenta</span>
                  </button>   
                 </li> 
                 <li>
                 <button onClick={() => ruta("/shoppingCart")} className='btn-carrito'>
                    <svg width="22px" height="18px" viewBox="0 0 1024.00 1024.00" fill="rgb(35, 174, 84)" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="rgb(35, 174, 84)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"></g><g id="SVGRepo_iconCarrier"><path d="M343.376 717.726a7.984 7.984 0 0 1-7.966-7.388 7.99 7.99 0 0 1 7.374-8.576L945 656.472l61.52-384.42H224.056c-4.422 0-8-3.576-8-7.998a7.994 7.994 0 0 1 8-7.998h791.836a8.01 8.01 0 0 1 7.904 9.264l-63.986 399.918a8.022 8.022 0 0 1-7.312 6.716l-608.514 45.756c-0.202 0.016-0.406 0.016-0.608 0.016zM312.03 719.96a7.988 7.988 0 0 1-7.716-5.922L128.35 58.168a7.99 7.99 0 0 1 5.654-9.794c4.266-1.124 8.654 1.376 9.794 5.654l175.962 655.874a7.994 7.994 0 0 1-5.654 9.794 7.988 7.988 0 0 1-2.076 0.264z" fill=""></path><path d="M343.382 717.758a7.992 7.992 0 0 1-7.716-5.92L151.078 26.182a8 8 0 0 1 15.45-4.154l184.586 685.654a8.012 8.012 0 0 1-5.646 9.81 7.97 7.97 0 0 1-2.086 0.266zM136.074 64.096H24.098a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h111.976a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M158.804 32.104H24.098a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8h134.708a7.994 7.994 0 0 1 7.998 8 7.998 7.998 0 0 1-8 7.998z" fill=""></path><path d="M24.098 64.096C10.866 64.096 0.102 53.332 0.102 40.102c0-13.232 10.764-23.996 23.996-23.996a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998 8.002 8.002 0 0 0-7.998 7.998 8.004 8.004 0 0 0 7.998 7.998 7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM951.904 368.034H301.508a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h650.396c4.422 0 8 3.576 8 7.998a7.994 7.994 0 0 1-8 7.998zM919.912 480.01H349.498c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h570.414c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM887.918 591.988H381.492a7.994 7.994 0 0 1-7.998-8 7.994 7.994 0 0 1 7.998-7.998h506.426a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.576 8-7.998 8zM296.034 815.942a7.9 7.9 0 0 1-3.468-0.796 7.982 7.982 0 0 1-3.724-10.67l47.35-98.184c1.912-3.966 6.694-5.624 10.678-3.732a8.004 8.004 0 0 1 3.724 10.684l-47.35 98.184a7.986 7.986 0 0 1-7.21 4.514zM264.36 815.942a7.89 7.89 0 0 1-3.466-0.796 7.98 7.98 0 0 1-3.726-10.67l47.35-98.184c1.914-3.966 6.694-5.624 10.678-3.732a8.006 8.006 0 0 1 3.726 10.684l-47.35 98.184a7.988 7.988 0 0 1-7.212 4.514zM919.912 879.928h-575.88a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8h575.88a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998zM919.912 847.934h-575.88a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h575.88a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998z" fill=""></path><path d="M344.032 879.928c-48.514 0-87.982-32.292-87.982-71.986a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 30.87 32.292 55.988 71.986 55.988a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M344.032 847.934c-26.432 0-55.988-17.106-55.988-39.992a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 11.67 20.558 23.996 39.992 23.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM919.912 879.928a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8a8 8 0 0 0 7.998-7.996c0-4.406-3.592-8-7.998-8a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998c13.23 0 23.994 10.764 23.994 23.996 0 13.23-10.764 23.994-23.994 23.994zM855.926 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v287.942a7.994 7.994 0 0 1-7.998 7.996zM743.948 623.98a7.992 7.992 0 0 1-7.996-7.998v-287.94a7.992 7.992 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM631.97 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM519.994 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM408.018 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v287.942a7.992 7.992 0 0 1-7.998 7.996zM400.02 1007.9c-35.282 0-63.986-28.698-63.986-63.986 0-6.216 0.89-12.374 2.654-18.278a8 8 0 0 1 9.944-5.376 7.978 7.978 0 0 1 5.382 9.938 48.29 48.29 0 0 0-1.984 13.714c0 26.462 21.528 47.99 47.99 47.99s47.99-21.528 47.99-47.99c0-4.672-0.672-9.28-1.984-13.714a7.978 7.978 0 0 1 5.38-9.938 7.972 7.972 0 0 1 9.944 5.376 63.764 63.764 0 0 1 2.656 18.278c0 35.29-28.706 63.986-63.986 63.986z" fill=""></path><path d="M400.02 967.91c-17.988 0-35.804-42.118-47.576-77.454a7.988 7.988 0 0 1 5.052-10.108 7.968 7.968 0 0 1 10.116 5.044c11.022 33.056 26.442 64.176 32.986 66.596 5.388-2.42 20.808-33.54 31.828-66.596a7.968 7.968 0 0 1 10.116-5.044 7.984 7.984 0 0 1 5.054 10.108c-11.772 35.336-29.588 77.454-47.576 77.454zM815.934 1007.9c-35.274 0-63.986-28.698-63.986-63.986 0-6.232 0.906-12.388 2.656-18.292a8.026 8.026 0 0 1 9.964-5.36 8.024 8.024 0 0 1 5.376 9.954c-1.328 4.42-2 9.028-2 13.7 0 26.462 21.528 47.99 47.99 47.99s47.99-21.528 47.99-47.99c0-4.672-0.656-9.28-1.984-13.714a8.032 8.032 0 0 1 5.39-9.954 8.006 8.006 0 0 1 9.95 5.406 64.284 64.284 0 0 1 2.64 18.262c0 35.288-28.712 63.984-63.986 63.984z" fill=""></path><path d="M815.934 967.91c-17.996 0-35.804-42.118-47.584-77.454a8 8 0 0 1 5.062-10.108 7.988 7.988 0 0 1 10.122 5.044c11.014 33.056 26.434 64.176 32.978 66.596 5.388-2.42 20.806-33.54 31.822-66.596a7.982 7.982 0 0 1 10.122-5.044 7.994 7.994 0 0 1 5.062 10.108c-11.78 35.336-29.588 77.454-47.584 77.454z" fill=""></path></g></svg> 
                    <span>Mi carrito</span>
                  </button>
                 </li> 
               </ul>         
               <div className="capa_logo_and_buscador"> 
                  <svg onClick={openNavLateral} width={20} className='icon_opened' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fff" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>         
                  <img onClick={() => ruta("/")} src="/src/assets/logo_tienda.png" alt="logo" />
                  <input type="text" placeholder="Buscar productos" />
               </div>
               <div className="capa_micuenta_and_micarrito">
                  <button className='btn-cuenta'>
                  <svg width={25} fill="rgb(83, 101, 99)" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>user</title> <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path> </g></svg>
                    <span>Mi cuenta</span>
                  </button>
                  <Link onClick={() => ruta("/shoppingCart")} className='btn-carrito'>
                    <svg width="22px" height="18px" viewBox="0 0 1024.00 1024.00" fill="rgb(35, 174, 84)" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="rgb(35, 174, 84)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"></g><g id="SVGRepo_iconCarrier"><path d="M343.376 717.726a7.984 7.984 0 0 1-7.966-7.388 7.99 7.99 0 0 1 7.374-8.576L945 656.472l61.52-384.42H224.056c-4.422 0-8-3.576-8-7.998a7.994 7.994 0 0 1 8-7.998h791.836a8.01 8.01 0 0 1 7.904 9.264l-63.986 399.918a8.022 8.022 0 0 1-7.312 6.716l-608.514 45.756c-0.202 0.016-0.406 0.016-0.608 0.016zM312.03 719.96a7.988 7.988 0 0 1-7.716-5.922L128.35 58.168a7.99 7.99 0 0 1 5.654-9.794c4.266-1.124 8.654 1.376 9.794 5.654l175.962 655.874a7.994 7.994 0 0 1-5.654 9.794 7.988 7.988 0 0 1-2.076 0.264z" fill=""></path><path d="M343.382 717.758a7.992 7.992 0 0 1-7.716-5.92L151.078 26.182a8 8 0 0 1 15.45-4.154l184.586 685.654a8.012 8.012 0 0 1-5.646 9.81 7.97 7.97 0 0 1-2.086 0.266zM136.074 64.096H24.098a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h111.976a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M158.804 32.104H24.098a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8h134.708a7.994 7.994 0 0 1 7.998 8 7.998 7.998 0 0 1-8 7.998z" fill=""></path><path d="M24.098 64.096C10.866 64.096 0.102 53.332 0.102 40.102c0-13.232 10.764-23.996 23.996-23.996a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998 8.002 8.002 0 0 0-7.998 7.998 8.004 8.004 0 0 0 7.998 7.998 7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM951.904 368.034H301.508a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h650.396c4.422 0 8 3.576 8 7.998a7.994 7.994 0 0 1-8 7.998zM919.912 480.01H349.498c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h570.414c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM887.918 591.988H381.492a7.994 7.994 0 0 1-7.998-8 7.994 7.994 0 0 1 7.998-7.998h506.426a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.576 8-7.998 8zM296.034 815.942a7.9 7.9 0 0 1-3.468-0.796 7.982 7.982 0 0 1-3.724-10.67l47.35-98.184c1.912-3.966 6.694-5.624 10.678-3.732a8.004 8.004 0 0 1 3.724 10.684l-47.35 98.184a7.986 7.986 0 0 1-7.21 4.514zM264.36 815.942a7.89 7.89 0 0 1-3.466-0.796 7.98 7.98 0 0 1-3.726-10.67l47.35-98.184c1.914-3.966 6.694-5.624 10.678-3.732a8.006 8.006 0 0 1 3.726 10.684l-47.35 98.184a7.988 7.988 0 0 1-7.212 4.514zM919.912 879.928h-575.88a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8h575.88a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998zM919.912 847.934h-575.88a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h575.88a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998z" fill=""></path><path d="M344.032 879.928c-48.514 0-87.982-32.292-87.982-71.986a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 30.87 32.292 55.988 71.986 55.988a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M344.032 847.934c-26.432 0-55.988-17.106-55.988-39.992a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 11.67 20.558 23.996 39.992 23.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM919.912 879.928a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8a8 8 0 0 0 7.998-7.996c0-4.406-3.592-8-7.998-8a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998c13.23 0 23.994 10.764 23.994 23.996 0 13.23-10.764 23.994-23.994 23.994zM855.926 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v287.942a7.994 7.994 0 0 1-7.998 7.996zM743.948 623.98a7.992 7.992 0 0 1-7.996-7.998v-287.94a7.992 7.992 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM631.97 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM519.994 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM408.018 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v287.942a7.992 7.992 0 0 1-7.998 7.996zM400.02 1007.9c-35.282 0-63.986-28.698-63.986-63.986 0-6.216 0.89-12.374 2.654-18.278a8 8 0 0 1 9.944-5.376 7.978 7.978 0 0 1 5.382 9.938 48.29 48.29 0 0 0-1.984 13.714c0 26.462 21.528 47.99 47.99 47.99s47.99-21.528 47.99-47.99c0-4.672-0.672-9.28-1.984-13.714a7.978 7.978 0 0 1 5.38-9.938 7.972 7.972 0 0 1 9.944 5.376 63.764 63.764 0 0 1 2.656 18.278c0 35.29-28.706 63.986-63.986 63.986z" fill=""></path><path d="M400.02 967.91c-17.988 0-35.804-42.118-47.576-77.454a7.988 7.988 0 0 1 5.052-10.108 7.968 7.968 0 0 1 10.116 5.044c11.022 33.056 26.442 64.176 32.986 66.596 5.388-2.42 20.808-33.54 31.828-66.596a7.968 7.968 0 0 1 10.116-5.044 7.984 7.984 0 0 1 5.054 10.108c-11.772 35.336-29.588 77.454-47.576 77.454zM815.934 1007.9c-35.274 0-63.986-28.698-63.986-63.986 0-6.232 0.906-12.388 2.656-18.292a8.026 8.026 0 0 1 9.964-5.36 8.024 8.024 0 0 1 5.376 9.954c-1.328 4.42-2 9.028-2 13.7 0 26.462 21.528 47.99 47.99 47.99s47.99-21.528 47.99-47.99c0-4.672-0.656-9.28-1.984-13.714a8.032 8.032 0 0 1 5.39-9.954 8.006 8.006 0 0 1 9.95 5.406 64.284 64.284 0 0 1 2.64 18.262c0 35.288-28.712 63.984-63.986 63.984z" fill=""></path><path d="M815.934 967.91c-17.996 0-35.804-42.118-47.584-77.454a8 8 0 0 1 5.062-10.108 7.988 7.988 0 0 1 10.122 5.044c11.014 33.056 26.434 64.176 32.978 66.596 5.388-2.42 20.806-33.54 31.822-66.596a7.982 7.982 0 0 1 10.122-5.044 7.994 7.994 0 0 1 5.062 10.108c-11.78 35.336-29.588 77.454-47.584 77.454z" fill=""></path></g></svg> 
                    <span>Mi carrito</span>
                    <span className={productosCarrito.length > 0 ? 'alertProduct': ''}></span>
                  </Link>
               </div>
            </nav>
        </header>
    )
}