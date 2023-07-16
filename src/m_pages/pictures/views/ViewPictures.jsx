
import React from 'react'

//Componentes..
import { Pictures } from '../componets/Pictures';


//Servicios..
import { getAllElementsService } from '../services/getCats.service';
import { getAllJSONService } from "../services/getJSON.service"

//Hooks
import {useFetch} from "../hook/useFetch"
// import { useFavs } from '../hook/useFavs';

export const ViewPictures = () => {


   return(
    <>
        <Pictures servicio={getAllElementsService}> 


        </Pictures>

        {/* <Paginate servicio={getAllJSONService}/> */}
       
      
        
    </>
 
    
  
    );
};
