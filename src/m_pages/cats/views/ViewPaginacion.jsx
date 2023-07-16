
import React from 'react'

//Componentes..
import { Paginate } from '../components/Paginate';
import { Cats } from '../components/Cats';
import DadCat from  "../components/DadCat";

//Servicios..
import { getAllElementsService } from '../services/getCats.service';
import { getAllJSONService } from "../services/getJSON.service"
import { FavoritesCats } from '../components/FavoritesCats';
//Hooks
import {useFetch} from "../hook/useFetch"
import { useFavs } from '../hook/useFavs';

export const ViewPaginacion = () => {


   return(
    <>
        {/* <Paginate servicio={getAllElementsService}> </Paginate> */}
        {/* <Paginate servicio={getAllJSONService}/> */}


    
        <DadCat></DadCat>

        {/* <DadCat>  */}
            {/* <DadCat.Cats /> */}
            {/* <DadCat.FavoritesCats /> */}
        {/* </DadCat> */}
        

    </>
 
    
  
    );
};
