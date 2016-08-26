import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './components/movie'
import Search from './components/search'
import Axios from 'axios'
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      movies: []
    }
    this.updateMovies = this.updateMovies.bind(this);
    // questions why am i setting this for ? i know it triggers a rerender
  }

  componentDidMount(){
    let difaultDisplay =  "horror"
    let url=`http://www.omdbapi.com/?s=${difaultDisplay}`;

    Axios.get(url)
     .then((response)=>{
      this.setState({movies:response.data.Search})
    }).catch((error)=>{
      console.log(error)
    })
// end of DidMoount
  }
  updateMovies(searchMovies){
    this.setState({
        movies:searchMovies

        // .concat(this.state.movies) if i want to add the the original results
      // end of set state
    })

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search onSearch={this.updateMovies} />
        </div>
        <ul className="movie-list">
        {this.state.movies.map((movie,index)=>{
          return(
            <li key={index} className="movie" >
            <Movie  movie={movie} />
            </li>
          )
          // end of movies state
        })}
        </ul>
      </div>
    );
  }
}

export default App;
