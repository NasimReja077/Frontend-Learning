
/* eslint-disable react-refresh/only-export-components */
import { use } from "react";
// import { useContext } from "react";
import { createContext } from "react";



// 1st Step createing Context
export const BioContext = createContext();

// 2nd Step creating Provider Component 
export const BioProvider = ({ children }) => {
     const myName = "Nasim"; // define all state
     const myAge = 30;
     console.log(children);

     return(
          <BioContext.Provider value={{myName, myAge}}>
               {children}
          </BioContext.Provider>
     )
}

// custom hooks
// export const useBioContext = () => {
//      const context = useContext(BioContext);
//      if(context === undefined){
//           throw new Error("Component must be wrapped with BioProvider");
//      }
//      return context;
// }


export const useBioContext = () => {
     const context = use(BioContext);
     if(context === undefined){
          throw new Error("Component must be wrapped with BioProvider");
     }
     return context;
}

