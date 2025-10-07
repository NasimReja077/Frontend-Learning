
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

// createContext returns a Context component, not a variable.
// The first letter of the Context component`s name must be uppercase.

// 1st Step createing Context
export const BioContext = createContext();

// 2nd Step creating Provider Component 
export const BioProvider = ({ children }) => {
     const myName = "Nasim"; // define all state
     const myAge = 30;
     console.log(children);

     // return <BioContext.Provider value={myName}>{children}</BioContext.Provider>

     return(
          // <BioContext.Provider value={{myName:myName, myAge:myAge}}>
          <BioContext.Provider value={{myName, myAge}}>
               {children}
          </BioContext.Provider>
     )
}