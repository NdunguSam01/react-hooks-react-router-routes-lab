import React from "react";
import { directors } from "../data";

function Directors() 
{
  const director=directors.map(director =>
    {
      const movie=director.movies.map(movie =>
        {
          return(
              <li key={movie}>{movie}</li>
          )
        })

        return(
          <div key={director.name}>
            <h1>Director's name: {director.name}</h1>
            <ul>
              {movie}
            </ul>
          </div>
        )
    })
  return <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {director}

  </div>;
}

export default Directors;
