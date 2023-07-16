import {API_JSON} from "../routs.js"

export const getAllJSONService = async (limit = 500, offset = 0 )=>{
    //?ESTA FUNC PIDE RECURSOS A UNA API. LIMIT ES LA CANTIDAD QUE QUIERO Y OFFSET EL DESPLAZAMINETO DE LA LISTA DE RECURSOS.
    //PETICION A LA API
        try{
            let url = `${API_JSON.url}${API_JSON.url_element[0]}`;
    
            let res = await fetch(url)
            if( !res.status.toString().startsWith("2") ) {//AVECES FECT FUNCIONA MAL CON EL TRY CATCH, ESTA LINEA LO SOLUCIONA
                throw new Error("Error en la llamada") ;
            }
            let data = await res.json()
            return data
            
        } catch(error){
            console.log("error en la peticion");
            return [];
        }
           
    
      
    }