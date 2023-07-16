import React from 'react'
import "./cats.css";

//Context dad components 
import { useCatsContext } from './DadCat';


export const Cats = () => { //👍 🔜
    //todo: La idea es hacer una peticion a una api ("para eso usa el hook de useFech") 
    //todo: que me devuelva una img mostrarla ,
    //todo: almacenarla en localStorage y en otro contenedor en la vista, seleccionar esta img
    //todo: y tambien quitarla de localStorage y del contenedor de favoritos de la vista 

    const {
        isLoading,
        elements,
        error, 
        handleFavorites,
        pagina,
        setPagina
    } = useCatsContext();

    // console.log( useCatsContext() )

  
    //?Vista...
    return (
    <div className='conteiner'>
        
        <div className="item" >
            {/* <div className="item-box1">
                <h4 className="box1-title">Titulo</h4>
            </div> */}

            <div className="item-box2"> 

                { isLoading && <h1 className='carga'>Cargando....</h1>} 
                {    error == null ? elements.map((element)=>{
                    // console.log(element, "element") 
                    return (
                        <img 
                        src={ element.url ? element.url : element } 
                        alt="imagen" 
                        className="item-box2-img" 
                        key={ element.id ? element.id : element}
                        /> 

                    )
                })
                  
                    :   <div key="sadasg"> <h2>Sin elementos </h2></div>
                }

            </div>


            <div className="item-box3">
                <button 
                    
                    className='item-box3-btn_like' 
                    onClick={(e)=>{ 
                    // console.log( elements[0],"button" )
                    let res = elements[0].url ? elements[0].url : elements[0]
                    handleFavorites( res )
                    }}
                >
                    💙
                </button>
                <button 
                    className='item-box3-btn_next' 
                    disabled={ isLoading }
                    onClick={()=>{  setPagina( pagina + 1) }}
                >
                    ➡
                </button>
                {/* {   
                    favorites.some((y)=>{ return y == elements[0] }) && 
                    <button onClick={()=>{
                       
                        let _quitar = favorites.filter( x => { return x != elements[0] })
                        setFavorites( _quitar )
                      

                    }}>Quitar</button>
                } */}
            </div>
        </div><br></br><br></br><br></br> 

   

    </div>
    )
}
