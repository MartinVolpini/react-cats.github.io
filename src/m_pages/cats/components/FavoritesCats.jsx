import React ,{useState }from 'react'
import { useFetch } from "../hook/useFetch"

import "./cats.css"
//Context dad components..
import { useCatsContext } from './DadCat'

export const FavoritesCats = () => {


    let {
        favorites, 
        showFav
    } = useCatsContext();

// console.log(  )
 

  return (
    <div className="box-favorites-imgs">
           
                { favorites.length > 0 && favorites.map((item)=>{
                    return(
                        <img 
                            key={item}
                            src={item} 
                            alt="Imagenes favoritas" 
                            className='img_likes'
                            onClick={()=>{ showFav(item);//Que aparezca el elemento en la vista
                            }}
                        />
                    )
                })}
                
          
        </div>


  )
}
