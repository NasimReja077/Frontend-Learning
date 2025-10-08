import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
//     const myName= useContext(BioContext);
     const {myName, myAge}= useContext(BioContext);
     return (
          <h1>hello Context Api. My name is {myName}. I am {myAge} year old boy</h1>
     )
}