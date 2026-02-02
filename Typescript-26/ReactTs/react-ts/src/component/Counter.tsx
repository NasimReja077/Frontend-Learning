import { useState } from "react"

export const Counter = () => {
     const [count, setCount] = useState<number>(0);
  return (
    <div>
     <p>Cups Orderded: {count}</p>
     <button onClick={() => setCount((c) => c + 1)}>Order One More</button>
    </div>
  )
}