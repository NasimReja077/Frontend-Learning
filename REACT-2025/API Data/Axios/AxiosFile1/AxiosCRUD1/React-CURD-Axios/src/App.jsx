import React, { useEffect } from 'react'
import { getPost } from './api/PostApi'

const App =()=> {
  console.log(getPost());

  const getPostData = async () =>{
    const res = await getPost();
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <h1>Hellow ther ITs ME</h1>
    </div>
  )
}

export default App
