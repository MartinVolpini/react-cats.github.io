import { useState } from "react";


const useConter = (initialCount = 0, incrementBy = 10) => {
    let [count, setPagina] = useState( initialCount );    

    let handleDecrement = () =>{ 
        
        count <= 0 ? setPagina( 0 ) : setPagina(count - incrementBy ) 
        // console.log("useCoter" + count)
    }
        
    let handleIncrement = () =>{ 
      
        setPagina(count + incrementBy  ) 
        // console.log("useCoter" + count)
    }
        // console.log("useCoter out" + count)
    return {
        count,
        handleDecrement,
        handleIncrement
    };
}

export default useConter;