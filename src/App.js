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
      searchData:""||"horror",
      movies: []
    }
    this.updateMovies = this.updateMovies.bind(this);
  }
  updateMovies(searchValue){
    this.setState({
        searchData:`${searchValue}`,
        // .concat(this.state.movies); if i want to add the the original results
      // end of set state
    })
  }

  componentDidMount(){
    let url=`http://www.omdbapi.com/?s=${this.state.searchData}`;

    Axios.get(url)
     .then((response)=>{
      this.setState({movies:response.data.Search})
    }).catch((error)=>{
      console.log(error)
    })
// end of DidMoount
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search onUpdate={this.updateMovies} />
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
