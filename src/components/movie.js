import React,{Component} from 'react';
export default class Movie extends Component{
  render(){
    let movie = this.props.movie;
    return(
      <div className="movie-info">
      <h4><a href={`http://www.imdb.com/title/${movie.imdbID}`} target="_blank">{movie.Title}</a></h4>
      <img src={movie.Poster} alt={movie.title} />
        <table>
        <tbody>
        <tr>
          <td>Year: {movie.Year}</td>
          <td>Type: {movie.Type}</td>
          <td>Type: {movie.Plot}</td>
        </tr>
        </tbody>
      </table>
      </div>
      // end of return
      )
      // end of render
  }
  // end of component
}
