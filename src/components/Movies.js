import React from "react";
import { movies } from "../data";

function Movies() 
{

  const movie=movies.map(movie =>
    {
      const genre=movie.genres.map(genre =>
        {
          return(
            <li key={genre}>{genre}</li>
          )
        })
      return(
        <div key={movie.title}>
          <h2>Movie title: {movie.title}</h2>
          <p>Time: {movie.time} minutes</p>
          <ul>
            {genre}
          </ul>
        </div>
      )
    })
  return <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {movie}
  </div>;
}

export default Movies;
