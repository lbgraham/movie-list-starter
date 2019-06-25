import React from 'react';

function AddMovieBar(props) {
  return (
    <div>
      <form>
        <input type='text' onChange={props.handleMovieAddChange}/>
        <input className="btn btn-primary" type="submit" value="Add Movie" onClick={props.handleAddMovieSubmit}/>
      </form>
    </div>
  )
}

export default AddMovieBar;
