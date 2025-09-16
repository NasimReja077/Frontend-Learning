import { useEffect, useState } from "react";

export const TodoDatetime = () =>{
      const [dateTime, setDateTime] = useState("");
       // todo Date and Time
       useEffect(() =>{
         const interval = setInterval(() =>{
           const now = new Date();
           const formattedDate = now.toLocaleDateString();
           const formattedTime = now.toLocaleTimeString();
           setDateTime(`${formattedDate} - ${formattedTime}`);
         }, 1000);
         return () => clearInterval(interval); // clenup funtion
       },[]);
       return(
          <h2>{dateTime}</h2>
       )
}