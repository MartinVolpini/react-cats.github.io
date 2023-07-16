
//Components...
import { GeneralLayouts } from './layouts/GeneralLayouts';



// import "../css/index.css";
import "./main.scss";


// Mis rutas....
import { RouterProvider } from "react-router-dom"
import { router } from './routes/AppRoutes';
import { AuthProvider } from './auth/context/AuthContext';

function App() {


   
   return (
   <>
      <GeneralLayouts> 
    

         <AuthProvider>
            <RouterProvider router={ router } />
         
         </AuthProvider>

      </GeneralLayouts>
   </>
  )
}

export default App
