import React from 'react'

import {BsJustify, BsList ,BsTextRight, BsInstagram ,BsFillCartFill,BsFillCartCheckFill} from "react-icons/bs";

// import { useNavigate } from "react-router-dom"

export const NavBar = () => {

    // let navigate = useNavigate()

    //Events
    function linkPage(){
        // navigate(
        //     "/pictures", 
        //     { replace : false }
        //   )
    } 


  return (
    <header id ="inicio" className="header">
    <div className="hd--content">

        <nav className="nav">

        <ul className="menu">

            <li className="nav-menu-items">
                <a className="nav-link" href="#inicio"></a>
            </li>
            <li className="nav-menu-items"> 
                <a className="nav-link" 
                   onClick={()=>{ linkPage }} 
                >
                
                </a>
            </li>
            <li className="nav-menu-items">
                <a className="nav-link" href="#contacto"></a>
            </li>

        </ul>

        </nav> 
    
        <h1 className="hd--titulo " >
            Pictures
        </h1>

    

        <button className="nav-toggle" aria-label="Abrir menu">
            
            < div className="icon-burger" ></div>
            < div className="icon-burger" ></div>
            < div className="icon-burger" ></div>
            < div className="icon-burger" ></div>
            { /* ESTE ES EL ICONO DE AMBURGUESA */}
            
        </button>

</div>
</header>
  )
}
