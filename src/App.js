import React, { Component } from 'react';
import './main.css';
import banner from './banner.png';
import { getResultsByName, getResultById } from './Utils.js';
import ResultList from './components/ResultList.js';
import MovieDetails from './components/MovieDetails.js';
import ResultCard from './components/ResultCard.js';
import LoadingResults from './components/LoadingResults.js';
import ErrorMessage from './components/ErrorMessage.js';
import Modal from './components/Modal.js';
import Paginator from './components/Paginator.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      type: "movie",
      results: [],
      isLoading: false,
      gotResults: false,
      error: null,
      viewingDetails: false,
      currentResult: null,
      currentPage: 1,
      totalPages: null,
    }
    this.viewResultDetails = this.viewResultDetails.bind(this)
  }

  onSearchChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      ...this.state,
      query: value,
    });
  }

  onTypeChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      ...this.state,
      type: value,
    });
  }

  onPageForward = () => {
    let newPage = this.state.currentPage
    newPage++
    if (newPage > this.state.totalPages){newPage=1}
    this.setState({
      ...this.state,
      currentPage: newPage
    }, () => {this.onSearchSubmit()});
  }

  onPageBackward = () => {
    let newPage = this.state.currentPage
    newPage--
    if (newPage < 1){newPage=1}
    this.setState({
      ...this.state,
      currentPage: newPage
    }, () => {this.onSearchSubmit()});
  }

  newSearch = () => {
    this.setState({
      ...this.state,
      currentPage: 1,
    }, () => {this.onSearchSubmit()});
  }


  onInputChange(ev) {
    let input = ev.target.name;
    this.setState({
      ...this.state,
      [input]: ev.target.value,
    });
  }

  onSearchSubmit = async () => {
    this.setState({
      ...this.state,
      viewingDetails: false,
      isLoading: true
    });
    try {
      let rawResults = await getResultsByName(this.state.query.trim(), 
        this.state.type, 
        this.state.currentPage);
      if (rawResults['Response'] === 'False') {
        this.setState({
          ...this.state,
          results: [],
          isLoading: false,
          error: rawResults['Error'],
          gotResults: false,
        })
      } else {
        let newResults = rawResults['Search']
        let totalPages = Math.ceil(parseInt(rawResults['totalResults']) / 10)
        console.log("new results=>", newResults);

        this.setState({
          ...this.state,
          results: newResults,
          error: null,
          gotResults: true,
          isLoading: false,
          totalPages: totalPages,
        });

      }

    } catch (err) {
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

  viewResultDetails = async (imdbID) => {
    if (this.state.viewingDetails === true) {
      this.setState({
        ...this.state,
        viewingDetails: false,
        gotResults: true,
      });
    } else {
      let newResult = await getResultById(imdbID);
      console.log("this is the new result=>", newResult);
      this.setState({
        ...this.state,
        viewingDetails: true,
        gotResults: false,
        currentResult: newResult,
      });
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getResultsByName(this.state.query.trim())
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
          <div className="row search-row">
            <div className="col-lg-12">
              <div className="form-group col-md-6">
                <input className="form-control-lg"
                  name="query"
                  id="searchQuery"
                  placeholder="search..."
                  onChange={(ev) => this.onInputChange(ev)} />
                <select class="form-control-lg"
                  onChangeCapture={this.onTypeChange}>
                  <option>Movie</option>
                  <option>Series</option>
                  <option>Game</option>
                </select>
                <button className="btn btn-danger ml-2" id="searchButton" onClick={this.newSearch}>Search</button>
              </div>
            </div>
          </div>

          <h2>Search Results</h2>
          <hr />
          <div className="row mb-2">
            {this.state.isLoading &&
              <LoadingResults />
            }

            {this.state.error &&
              <ErrorMessage
                error={this.state.error}
              />
            }
            {this.state.viewingDetails &&
              <Modal
                show={this.state.viewingDetails}
                onClose={this.viewResultDetails}>
                <MovieDetails
                  key={this.state.currentResult.imdbID}
                  poster={this.state.currentResult.Poster}
                  runtime={this.state.currentResult.Runtime}
                  rated={this.state.currentResult.Rated}
                  genre={this.state.currentResult.Genre}
                  title={this.state.currentResult.Title}
                  plot={this.state.currentResult.Plot}
                  ranking={this.state.currentResult.Ratings[0]?.Value}
                  type={this.state.currentResult.Type}
                  year={this.state.currentResult.Year}
                  starring={this.state.currentResult.Actors} />
              </Modal>

            }
            {this.state.gotResults &&
              <ResultList
                results={this.state.results}
                render={(result) => (
                  <ResultCard
                    key={result.imdbID}
                    poster={result.Poster}
                    title={result.Title}
                    type={result.Type}
                    year={result.Year}
                    getDetails={() => this.viewResultDetails(result.imdbID)} />
                )} />
            }
            {this.state.gotResults &&
              <Paginator
                page={this.state.currentPage}
                totalPages={this.state.totalPages}
                next={this.onPageForward}
                prev={this.onPageBackward}
              />
            }

            {/* { this.state.viewingDetails &&
              <MovieDetails
              key={this.state.currentResult.imdbID}
              poster={this.state.currentResult.Poster}
              runtime={this.state.currentResult.Runtime}
              rated={this.state.currentResult.Rated}
              genre={this.state.currentResult.Genre} 
              title={this.state.currentResult.Title}
              plot={this.state.currentResult.Plot}
              ranking={this.state.rcurrentResult.Ranking} 
              type={this.state.currentResult.Type} 
              year={this.state.currentResult.Year}
              starring={this.state.currentResult.Actors}
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
