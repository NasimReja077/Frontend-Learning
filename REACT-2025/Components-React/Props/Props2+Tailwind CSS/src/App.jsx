/* eslint-disable no-undef */

import React from 'react'

import NetFlixSeriesCard from "./component/NetFlixSeriesCard.jsx" ;

export const App = () => {
  return (
    <section className='container mx-auto px-4 py-8'>
    <h1 className="text-2xl font-bold mb-6 text-center">List of Best Netflix Series</h1> 
       <NetFlixSeriesCard />
   </section>
    );
};
