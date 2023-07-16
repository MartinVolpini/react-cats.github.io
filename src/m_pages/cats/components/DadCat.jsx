import React ,{createContext, useContext}from 'react'

//Styles
import "./cats.css";

// Components..
import { Cats } from './Cats';
import { FavoritesCats } from './FavoritesCats';
// Hook..
import {useFetch} from "../hook/useFetch"
import { useFavs } from '../hook/useFavs';
//Servicio..
import {getAllElementsService} from "../services/getCats.service"


//? Contexto de componente

const CatsContext = createContext();
const { Provider } = CatsContext;
export const useCatsContext = () => { return useContext( CatsContext ) };


const DadCat = ({ children }) => { //👍 🔜
    //! Problemas con el tiempo de respuesta del servicio del componente Cats
    //! Cuando le pasaba todo por props bien, 
    //! La ultima sintaxis de " Component.Component = Component " me trae problemas 
    //todo: La idea es hacer una peticion a una api ("para eso usa el hook de useFech") 
    //todo: que me devuelva una img mostrarla ,
    //todo: almacenarla en localStorage y en otro contenedor en la vista, seleccionar esta img
    //todo: y tambien quitarla de localStorage y del contenedor de favoritos de la vista 

     //? Hooks
     const {
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
        service: getAllElementsService,
        limite: 1, //Este valor dice la cantidad de elementos que me estoy trayendo del servicio
        })
    
        const {
            handleFavorites, 
            favorites
            } = useFavs() 
        
        function showFav(item){
            //Que aparezca el elemento en la vista
            setElements([{ id: item ,url:item}]);
        }

    //?Vista...
    return (
    <div className='conteiner'>

        <Provider
            value={{
                favorites,
                showFav,
                elements,
                setElements,
                error,
                isLoading,
                handleFavorites,
                pagina,
                setPagina
            }}>

             <div className="">
            
             {/* { isLoading ? <h1>Cargando....</h1> : <> {children} </> } */}
                <Cats />
                <FavoritesCats />

            </div>

        </Provider>
   
    </div>
    );
};
//! ME TRAE PROBLEMSAS CON EL TIEMPO DE RESPUESTA NO SE MA CARGA EL COMPONENTE
// DadCat.Cats = Cats;
// DadCat.FavoritesCats = FavoritesCats;

export default DadCat;