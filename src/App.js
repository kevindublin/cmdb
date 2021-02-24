import './App.css';
import './main.css';
import banner from './banner.png'
import getMoviesByNameB from './utils.js';

let state = {
    query: "Batman",
  }

  const onSearchChange = (ev) => {
    let value = ev.target.value;
    state = {...state,
            query: value,};
  }

function App() {

  return (
    <div className="App">
      <img className="headerImage" src={banner} />
        <div className="container h-100">
          <div className="row h-100 align-text-bottom" id="main-header">
            <div className="col-lg-12">
              <h1 className="display-4 text-white mt-5">CMDB</h1>
              <p className="lead mt-5 text-50">Because you want to search movies differently</p>
            </div>
          </div>
        </div>


      <div className="container">

        <div className="row">
          
            <h2>Search</h2>
            <hr />
              <div className="form-group row">
                <div className="col-sm-10">
                  <input className="form-control" 
                    id="searchQuery" 
                    placeholder="search..."
                    onChange={onSearchChange} />
                </div>
              </div>
              <button className="btn btn-primary" id="searchButton" onClick={() => getMoviesByNameB(state.query)}>Search</button>
        </div>
        
        <h2>Search Results</h2>
        <hr />
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src="..." alt="poster" />
              <div className="card-body">
                <p className="card-text">Movie Title</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src="..." alt="poster" />
              <div className="card-body">
                <p className="card-text">Movie Title</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src="..." alt="poster" />
              <div className="card-body">
                <p className="card-text">Movie Title</p>
              </div>
            </div>
          </div>
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

export default App;
