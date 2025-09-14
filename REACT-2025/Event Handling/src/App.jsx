 

import React from 'react'

// import EventHandling from "./component/EventHandling.jsx" ;
// import { EventProps } from './component/EventProps.jsx';
import { EventPropagation } from "./component/EventPropagation.jsx";
// import { EventPropagationBlogExgample } from './component/EventPropagationBlogExgample.jsx';
export const App = () => {

  return (
    <section className='container'>
      {/* <EventHandling />
      <EventProps /> */}
      <EventPropagation />
      {/* <EventPropagationBlogExgample/> */}
    </section>
  );
};
