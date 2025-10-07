import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
     const {myName, myAge}= useContext(BioContext);
     return (
          <h1>hello Context Api on About. My name is {myName}. I am {myAge} year old boy</h1>
     )
}