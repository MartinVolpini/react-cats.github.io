import React from 'react'
import { useFetch } from "../hook/useFetch"
// import { getAllElementsService } from '../services/getCats.service';
// import { getAllJSONService } from "../services/getJSON.service"

export const Paginate = ( props ) => {

    let {
        error,
        isLoading,
        setIsLoading , 
        elements,
        setElements, 
        pagina,
        setPagina, 
        fetchAllElements
    } = useFetch( {
        // url: "https://jsonplaceholder.typicode.com/users",
        service: props.servicio
    } );  
    
    // console.log(elements, pagina)

    // console.log( pagina + " Desde la Paginacion" )


  return (
    <div className="" >

       <h1>Paginacion</h1>

       <div className=""
       style={{
        display:"flex", flexFlow:"row wrap", 
        minHeight:"45rem"
        }}>

        { isLoading && <h1>Cargando....</h1>}
        {
        error == null ? 
        elements.map( (item,i) => {
        
            return (
            <div className="" key={item.id} 
                style={{
                display:"flex", flexFlow:"column", 
                justifyContent:"center",alignItems:"center",
                height:"24rem",
                margin:"10px 20px"
                }}>
                <img  src={item.url} style={{maxHeight:"23rem"}}/>
                <div>{item.name}</div>
            </div>
            )
        })

        : <div key="sadasg"> <h2>Sin elementos </h2></div>

        }
        </div>

        <button onClick={()=>{ pagina == 0 ? setPagina(pagina) : setPagina(pagina - 10) }} >Before</button>
        <button onClick={()=>{ setPagina(pagina + 10) }} >Next</button>
        <br></br><br></br><br></br>

        {props.children}
    </div>
  )
}
