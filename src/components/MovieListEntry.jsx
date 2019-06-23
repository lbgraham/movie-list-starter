import React from 'react';
import $ from 'jquery';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      popularity: '',
      releaseDate: ''
    }
    // Lifecycle method - componentDidMount() - all async requests should generally use this
    // 
    // Don't forget to bind these methods in class-based stateful components!!!
    this.handleClick = this.handleClick.bind(this);
    this.parseMovieData = this.parseMovieData.bind(this);
  }

  componentDidMount() {
    this.getMovieData()
  }

  handleClick() {
    // It would be better to use the previous state in the setState callback
    this.setState({clicked: !this.state.clicked})
  }

  getMovieData() {
    const movieName = this.props.movie.title;
    // Create correct query string for url
    const url = 'https://api.themoviedb.org/3/search/movie';
    $.ajax({
      url: url,
      type: 'GET',
      data: {
        api_key: '2d14c980ab8b8efe0f4c9fafc176f44d',
        query: movieName
      },
      success: (data) => this.parseMovieData(data)
    });
  }

  parseMovieData(data) {
    const results = data.results[0];
    this.setState({popularity: results.popularity, releaseDate: results.release_date})
  }

  render() {
    return (
        // We only need curly braces if we are in a JSX element. This is javascript
        this.state.clicked ?
        <li onClick={this.handleClick}>
          {this.props.movie.title}
          Release Date: {this.state.releaseDate}
          Popularity: {this.state.popularity}
        </li> :
        <li onClick={this.handleClick}>{this.props.movie.title}</li>
    )
  }

}

export default MovieListEntry;

