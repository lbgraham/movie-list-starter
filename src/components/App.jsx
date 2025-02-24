import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './Search.jsx';
import AddMovieBar from './AddMovieBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      addMovie: '',
      isFiltered: false
    }
    // Must bind all statful class based methods the 'this' context to child nodes
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.handleMovieAddChange = this.handleMovieAddChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value})
  }

  handleSubmit() {
    event.preventDefault();
    this.setState({isFiltered: true})
  }

  handleMovieAddChange(e) {
    console.log(e.target.value);
    this.setState({addMovie: e.target.value})
  }

  handleAddMovieSubmit() {
    event.preventDefault();
    console.log(this.state.addMovie);
  }

  render() {
    // This is an example of conditional rendering
    var generateMovieList = () => {
      if(this.state.isFiltered) {
        var filteredList = this.props.movies.filter(movie => movie.title.includes(this.state.searchValue));
        
        // Gracefully handle a search that does not have any results
        if(filteredList.length === 0) {
          return <tr><td>No results brah</td></tr>
        } else {
          return <MovieList movies={this.props.movies.filter(movie => movie.title.includes(this.state.searchValue))}/>
        }
      } else {
        return <MovieList movies={this.props.movies}/>
      }
    }

    return (
      <div>
        <div>
          <AddMovieBar handleMovieAddChange={this.handleMovieAddChange} handleAddMovieSubmit={this.handleAddMovieSubmit}/>
        </div>
        <div>
          <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchValue={this.state.searchValue}/>
        </div>
        <div>
          <table>
            <tbody>
              {generateMovieList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;