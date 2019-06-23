import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

function MovieList(props) {
  return  (
    <ul>
          {
            props.movies.map((movie) => (
            <MovieListEntry key={movie.title} movie={movie} />
            ))
          }
    </ul>
  )
}

export default MovieList;

