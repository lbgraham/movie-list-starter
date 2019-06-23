import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      isFiltered: false
    }
    // Must bind all statful class based methods the 'this' context to child nodes
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value})
  }

  handleSubmit(e) {
    event.preventDefault();
    this.setState({isFiltered: true})
  }

  render() {
    // This is an example of conditional rendering
    var generateMovieList = () => {
      if(this.state.isFiltered) {
        return <MovieList movies={this.props.movies.filter(movie => movie.title.includes(this.state.searchValue))}/>
      } else {
        return <MovieList movies={this.props.movies}/>
      }
    }

    return (
      <div>
        <div>
          <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchValue={this.state.searchValue}/>
        </div>
        <div>
          {generateMovieList()}
        </div>
      </div>
    )
  }
}

export default App;