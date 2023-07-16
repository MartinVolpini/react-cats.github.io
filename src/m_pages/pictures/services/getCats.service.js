"use strick";
import { URL_BASE , URL_ELEMENTO , URL_PAGINACION } from "../config.js"


export const getAllElementsService = async (limit = 500, offset = 0 )=>{
//?ESTA FUNC PIDE RECURSOS A UNA API. LIMIT ES LA CANTIDAD QUE QUIERO Y OFFSET EL DESPLAZAMINETO DE LA LISTA DE RECURSOS.
//PETICION A LA API
    try{
        const _URL = `${URL_BASE}${URL_ELEMENTO}?${URL_PAGINACION.LIMIT}${limit}&${
            URL_PAGINACION.OFFSET}${offset}`;

        let res = await fetch( _URL )
        if( !res.ok ) {//AVECES FECT FUNCIONA MAL CON EL TRY CATCH, ESTA LINEA LO SOLUCIONA
            throw new Error("Error en la llamada") ;
        }
        let data = await res.json()
        return data
        
    } catch(error){
        console.log("error en la peticion");
        return [];
    }
       

  
} 
