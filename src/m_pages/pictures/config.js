let api_cats = "https://api.thecatapi.com/v1/images/search?limit=10"

export const URL_BASE = "https://api.thecatapi.com/v1/";
//?LA URL Base DE LA API.
// v2/ es la vercion

export const URL_ELEMENTO = "images/search";

export const URL_PAGINACION = { LIMIT:"limit=", OFFSET:"offset=" }

//?la paginacion en las url de las api casi siempres se manejan con las palabras limit y offset
//*PARAMETROS limit=1000 and offset=0

//Estructura: ?param=valor&otroParam=valor

//Para empezar a pasar parametros le ponemos signo de pregunta. " ? "
//Con el simbolo " & " podemos concatenar parametos

//
//Esto offset=0 es la cantidad de posisiones que desplazamos, ejem offset=10 seria pedi de 10 en 10


export const API_JSON = { 
    url: "https://jsonplaceholder.typicode.com",
    url_element: ["/users"] //?Esta api va a traer 10 usuarios por defecto
}