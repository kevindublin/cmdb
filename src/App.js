import React, { Component } from 'react';
import banner from './banner.png';
import getMoviesByNameB from './utils.js';
import ResultList from './ResultList.js';
import MovieDetails from './MovieDetails.js';
import LoadingResults from './LoadingResults.js';
import ErrorMessage from './ErrorMessage.js'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: "",
      results: [],
      isLoading: false,
      gotResults: false,
      error: null,
      viewingDetails: false,
    }
    
  }

  onSearchChange = (ev) => {
    let value = ev.target.value;
    this.setState({...this.state,
      query: value,});
  }
  
  onSearchSubmit = async () => {
    this.setState({...this.state,
      isLoading: true});
    try {
      let rawResults = await getMoviesByNameB(this.state.query);
      if (rawResults['Response'] === 'False') {
        this.setState({...this.state,
          results: [],
          isLoading: false,
          error: rawResults['Error'],
          gotResults: false,})
      } else {
        let newResults = rawResults['Search']
        console.log("new results=>", newResults);

        this.setState({...this.state,
          results: newResults,
          error: null,
          gotResults: true,
          isLoading: false});

      }

    } catch(err) {
        console.log(err);
        this.setState({
          ...this.state,
          results: [],
          isLoading: false,
          error: err['Error'],
          gotResults: false,
          viewingDetails: false,
        });
    }
  
  }

  viewResultDetails(result) {
    if (this.state.viewingDetails === true) {
      this.setState({...this.state,
                      viewingDetails: false,
                      gotResults: true});
    } else {
      this.setState({...this.state,
        viewingDetails: true,
        gotResults: false,
      });
    }
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
              <div>
                <img className="header-image img-fluid" src={banner} alt="banner" />
              </div>
              <p className="lead mt-5 text-center">Because you want to search on YAMD</p>
            </div>
          </div>
          <div className="row">
            <hr />
            <div className="form-group">
              <div className="col-sm-10">
                <input className="form-control-lg" 
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
            { this.state.isLoading &&
             <LoadingResults/>
            }

            { this.state.error && 
              <ErrorMessage
              error={this.state.error}
            />
            }

            { this.state.gotResults &&
            <ResultList
            results={this.state.results} />
            }

            {/* { this.state.viewResultDetails &&
              <MovieDetails 
              key={this.state.result.imdbID}
              poster={this.state.result.Poster}
              runtime={this.state.result.Runtime}
              rated={this.state.result.Rated}
              genre={this.state.result.Genre} 
              title={this.state.result.Title}
              plot={this.state.result.Plot}
              ranking={this.state.result.Ranking} 
              type={this.state.result.Type} 
              year={this.state.result.Year}
              starring={this.state.result.Actors}
              />
            } */}
          </div>
          <div className="row mb-2">
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
