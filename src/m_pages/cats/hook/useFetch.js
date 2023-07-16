import { useState, useEffect } from "react";


export const useFetch = ( {url = "", service = null, limite = 10, page = 0} = {} ) => {
  
    let [elements, setElements] = useState([]);

    let [pagina, setPagina] = useState(page);          //CONTROLO LA PAGINA
    let [error, setError] = useState(null)          //MANEJO EL ERROR
    let [isLoading, setIsLoading] = useState(false); //CONTROLO LA CARGA

    const fetchAllElements = async (num1 = 10 , num2 = 0)=>{
        try{
            setIsLoading(true)
            setError(null)

            if(!url && !service){
                throw new Error ("Error en el hook por falta de url o servicio")
            }

            if(service) { 
                const _res = await service(num1 , num2)
                setElements(_res)
            }
            if(url && !service){

                const _peticion = await fetch(url)
               
                // if(!_res.status.toString().startsWith("2")){
                //     throw new Error ("Error en la llamada a la url en el hook")
                // }

                const _res = await _peticion.json()
                
                setElements(_res);
            }

            // let _res = await getAllElementsService(num1 , num2);
     
            // setElements( _res )
            // return _res;
        } 
        catch (error){ setError("ERROR") }
        finally{ setIsLoading(false) }
       
  
    }
    //?ESTA ES LA PAGINACION CLASICA
    // let matriz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // const paginate = ( array, page_size , page_number ) => {
    //     return array.slice( page_size * page_number , page_size * (page_number + 1) )
    // }

    // console.log(pagina + " hook")

    useEffect(()=>{
        fetchAllElements( limite , pagina)
    },[]);
    useEffect(()=>{
        fetchAllElements( limite , pagina)
    },[pagina]);

  return{
    elements,
    setElements,
    error,
    setError,
    isLoading,
    setIsLoading,
    pagina,
    setPagina,
    fetchAllElements
  }
   
}
