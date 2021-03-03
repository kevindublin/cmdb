import React, { Component } from 'react';
import banner from './banner.png'
import getMoviesByNameB from './utils.js';
import ResultCard from './ResultCard.js'
import MovieDetails from './MovieDetails.js'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: "Furious",
      results: [
        {Poster: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg",
        Title: "Furious 7",
        Type: "Movie",
        Year: "2015",
        imdbRating: "7.1",
        Runtime: "137 min",
        Rated: "PG-13",
        Genre: "Action, Adventure, Thriller",
        Plot: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        Actors: "Vin Diesel, Paul Walker, Jason Statham, Michelle Rodriguez"
      },
      {Poster: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg",
        Title: "Furious 7",
        Type: "Movie",
        Year: "2015",
        imdbRating: "7.1",
        Runtime: "137 min",
        Rated: "PG-13",
        Genre: "Action, Adventure, Thriller",
        Plot: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        Actors: "Vin Diesel, Paul Walker, Jason Statham, Michelle Rodriguez"
      },
      {Poster: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg",
        Title: "Furious 7",
        Type: "Movie",
        Year: "2015",
        imdbRating: "7.1",
        Runtime: "137 min",
        Rated: "PG-13",
        Genre: "Action, Adventure, Thriller",
        Plot: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        Actors: "Vin Diesel, Paul Walker, Jason Statham, Michelle Rodriguez"
      }
      ],
      isLoading: false,
      gotResults: false,
      error: null,
    }
    
  }

  onSearchChange = (ev) => {
    let value = ev.target.value;
    this.setState({...this.state,
      query: value});
  }
  
  onSearchSubmit = async () => {
    let rawResults = await getMoviesByNameB(this.state.query);
    let newResults = rawResults['Search']
    console.log("new results", newResults)
  
    this.setState({...this.state,
      results: newResults,
      gotResults: true});
    console.log("after submit:", this.state);
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getMoviesByNameB(this.state.query)
    .then(data => {
      this.setState({
        isLoading: false,
        error: null,
        results: data['Search']
      });
    });
  }

componentDidUpdate() {

}

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img className="header-image" src={banner} alt="banner" />
              <p className="lead mt-5 text-center">Because you want to search on YAMD</p>
            </div>
          </div>
          <div className="row">
            <hr />
            <div className="form-group row">
              <div className="col-sm-10">
                <input className="form-control" 
                  id="searchQuery" 
                  placeholder="search..."
                  onChange={this.onSearchChange} />
              </div>
            </div>
            <button className="btn btn-danger" id="searchButton" onClick={this.onSearchSubmit}>Search</button>
          </div>
          
          <h2>Search Results</h2>
          <hr />
          <div className="row mb-2">
  
            { this.state.gotResults &&
              this.state.results.slice(0,6).map((result) => (
                <ResultCard 
                  key={result.imdbID}
                  poster={result.Poster} 
                  title={result.Title} 
                  type={result.Type} 
                  year={result.Year}
                  />
              ))
            }
          </div>
          <div className="row mb-2">
  
            {/* { state.gotResults &&
              state.results.slice(0,2).map((result) => (
                <MovieDetails 
                  key={result.imdbID}
                  poster={result.Poster}
                  runtime={result.Runtime}
                  rated={result.Rated}
                  genre={result.Genre} 
                  title={result.Title}
                  plot={result.Plot}
                  ranking={result.Ranking} 
                  type={result.Type} 
                  year={result.Year}
                  starring={result.Actors}
                  />
              ))
            } */}
          </div>
          
        </div>
  
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">This is a simple movie database.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
