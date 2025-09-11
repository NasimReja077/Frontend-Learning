/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'


const src = "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const NetFlixSeriesCard = () =>{ // Components alwase camel case // it is not funtion 
  return(
    <div>
      <div>
        <img src={src} alt='photo.jpg' width="20%" height="10%" />
      </div>
      <h2>Andor</h2>
      <h3>Rating:8.5</h3>
      <p>
        Reviewers say 'Andor' is lauded for mature storytelling, complex characters, and gritty realism, setting it apart from other Star Wars content. The series deeply explores the Star Wars universe, focusing on ordinary people's struggles against the Empire. Diego Luna's performance is particularly noted for its intensity and depth. The show's world-building, attention to detail, and thematic depth offer a fresh, engaging take on the franchise, avoiding typical tropes for a nuanced narrative.
      </p>
      <button onClick ={() => alert ("Why are you clike me ha,,")} className='btn'>Not Click</button>
      <input type="text" data-test="input" />
    </div>
  )
}
function App() {
  return (
    <div>
      <NetFlixSeriesCard />
      <NetFlixSeriesCard />
      <NetFlixSeriesCard />
    </div>
  )
}

export default App
