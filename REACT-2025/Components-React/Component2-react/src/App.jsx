/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

import NetFlixSeriesCard from "./component/NetFlixSeriesCard.jsx" 

// import { NetFlixSeriesCard , Footer} from "./component/NetFlixSeriesCard.jsx" // export
// import NetFlixSeriesCard, {Header ,Footer} from "./component/NetFlixSeriesCard.jsx" // // combined export import

function App() {
  return (
    <>
    {/* <Header/> */}
    <NetFlixSeriesCard />
    <NetFlixSeriesCard />
    <NetFlixSeriesCard />
    {/* <Footer/> */}
    </>
  )
}

export default App
