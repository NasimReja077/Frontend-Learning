import { useState, useTransition } from "react";

function App() {
  const [pending,startTransition]=useTransition();

const handleButton= ()=>{
  
  startTransition(async ()=>{
    await new Promise(res=>setTimeout(res,5000))
  })

  

  return (
   <div>
    <h1>useTransition Hook in React js 19</h1>
    {
      pending?
      <img style={{width:"100px"}} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" srcset="" />
      :null
    }
    <button  disabled={pending} onClick={handleButton} >Click</button>
   
   </div>

  );
}
}

export default App;