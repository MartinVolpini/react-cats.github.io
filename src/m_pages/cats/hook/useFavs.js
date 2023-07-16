
import {useState,useEffect} from 'react'
// Utils..
import addToLocalStorage from '../../../utils/localStorage.utils';

export const useFavs = (initilaValue = [], key = "favs") => {
  
    //Acumulador Favoritos
    let [favorites, setFavorites] = useState( initilaValue );
    useEffect(()=>{
        let _favs = addToLocalStorage().getFromLocalStorage( key )  == undefined ? [] : addToLocalStorage().getFromLocalStorage( key )
        setFavorites( _favs )
    },[])

    //Funcionalidades
    let isFavorite          = (cat) => {
        return favorites.includes(cat)
    };
    let addFavorites        = (cat) => {
        // // !favorites.some((y)=>{ return y.url == elements[0].url }) && setFavorites([ ...favorites, elements[0]] )
        
        // O
        if (favorites.length > 7  ){ alert("Llegaste al limite de capacidad!!") }
        else {
            let newFav = [...new Set([...favorites, cat]) ]
            setFavorites( newFav )
            addToLocalStorage( key ,newFav )
        }
    };
    let removeFromFavorites = (cat) => { 
        let newFavs = favorites.filter(i => i !== cat) 
        setFavorites( newFavs )
        addToLocalStorage( key , newFavs) //Estas agregando porque estas pisando la var con el array filtrado 
    };

    //Evento
    function handleFavorites(cat) {
        isFavorite(cat) ? removeFromFavorites(cat) :
        addFavorites( cat )
    }

    return {
        handleFavorites,
        favorites,
        setFavorites,

    }
}
