import React, { useContext, useState } from 'react'

//Styles
import "./loginForm.css"
//Context global
import { AuthContext } from '../../../auth/context/AuthContext'
//Utils..
import addToLocalStorage  from "../../../utils/localStorage.utils"
//Libreria de rutas...
import { useNavigate } from "react-router-dom";


export const LoginForm = () => {

    let navigate = useNavigate()

    let { login, logout , isLoggedIn} = useContext( AuthContext )
    
    let [input_1 , setInput_1] = useState("");
    let [input_2 , setInput_2] = useState("");

  let onClick = (key , obj) => {
    //todo: validar el form data

    //todo: preparar los datos
    
    //todo: hacer un POST al back.end para hacer el login
    
    // console.log( addToLocalStorage().getFromLocalStorage( key ) )
    // console.log(   obj.name , obj.password )
 
    //todo: guardar el estado en auth y en localStorage 

    addToLocalStorage( key , obj  )         //Te agrego al localstorage

    login( obj.name , obj.password )        //Te logueo
    
    //todo: Redireccionar
      navigate(
        "/", 
        { replace : true }
      )
  }

  return (
    <div className='content'>

           <form action="" className='lgForm' > 
            
            <div className="lgForm--rox1">
              <h1 className='lgTitle'  >
                Login
              </h1>
            </div>
            <div className="lgForm--row2">
              <input type="text" className="lgForm--row2--item" placeholder='User' onChange={(e)=>{ setInput_1(e.target.value) }} />
              
              <input type="text" className="lgForm--row2--item " placeholder='Password'  onChange={(e)=>{ setInput_2(e.target.value) }} />
            </div>
        
            
            <input 
                type="submit" 
                className=" btns " 
                value={"Enviar"} 
                onClick={(e)=>{ 
                    e.preventDefault(); 
                    onClick( "user" , {name:input_1 , password:input_2} )
                    
                }}/>
            <input 
                type='reset' 
                className=" btns  " 
                value={"Reset"} 
                />
        </form>

    </div>
  )
}
