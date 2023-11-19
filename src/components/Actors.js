import React from "react";
import { actors } from "../data";

function Actors() 
{
  const actor=actors.map(actor => 
    {
      let {name, movies} = actor
      const movie =  movies.map(movie =>
        {
          return(
            <li key={movie}>{movie}</li>
          )
        })
      
        return(
          <div key={name}>
            <h1>Actor's name: {name}</h1>
            <ul>
              {movie}
            </ul>
          </div>
        )
    })
  return <div>{/*{code here}*/}
    <h1>Actors Page</h1>
    {actor}
  </div>;
}

export default Actors;
