import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; itemos: number }): void;
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Laptop");
  const [itemos, setItemos] = useState<number>(1);

  function handleSubmit (e: React.FormEvent<HTMLFormElement>){
     e.preventDefault();
     onSubmit({ name, itemos });
  }
  return(
     <div>
          <form onSubmit={handleSubmit}>
               <label>Items Name</label>
               <input
               value={name}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName (e.target.value)} 
               />

               <label>Items Number</label>
               <input
               type="number"
               value={itemos}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemos (Number(e.target.value) || 0)} 
               />
               <button type="submit">Place Order</button>
          </form>
     </div>
  )
}