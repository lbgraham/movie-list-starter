import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

function MovieList(props) {
  return  (
    <tr>
      <td>
        {
          props.movies.map((movie) => (
          <MovieListEntry key={movie.title} movie={movie} />
          ))
        }
      </td>
    </tr>
  )
}

export default MovieList;

