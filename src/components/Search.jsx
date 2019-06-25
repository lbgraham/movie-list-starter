import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <form>
        <input type='text' onChange={props.handleChange} value={props.searchValue}/>
        <input className="btn btn-primary" type="submit" value="Search" onClick={props.handleSubmit}/>
      </form>
    </div>
  )
}

export default SearchBar;