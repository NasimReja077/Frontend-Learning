// import { useContext } from "react";
import { 
     BioContext, 
     // useBioContext
 } from ".";
import { use } from "react";

export const About = () => {
     // const {myName, myAge}= useBioContext;
     // const {myName, myAge}= useContext(BioContext);
     const {myName, myAge}= use(BioContext);

     const mewHook = true;
     let myName, myAge;
     if(newHook){
          ({myName, myAge} = use(BioContext));
     }

     return (
          <div>
               <Selection>
                    <h1>hello Context Api on About. My name is {myName}. I am {myAge} year old boy</h1>
               </Selection>
          </div>
     )
}