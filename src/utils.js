// original function to fetch list of films with promises
const getMoviesByName = (query) => {
	let apiKey = `${process.env.REACT_APP_OMDB_KEY}`
	let baseUrl = "https://www.omdbapi.com/"
	let endpoint = "?s"
	let url = `${baseUrl}?apikey=${apiKey}&s=${query}`
	console.log(url);
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log("result returned:", data);
		})
}

// original function to get single film details by ID
const getMovieDetailsById = (ev) => {
	let apiKey = `${process.env.REACT_APP_OMDB_KEY}`
	fetch("https://www.omdbapi.com/?i=" + ev + "&apikey=" + apiKey)
		.then(response => response.json())
		.then(data => {
			console.log("result returned:", data);
		})
}

// getMovieDetailsById("tt0372784");

// refactored function to fetch list of films with async, await
const getMoviesByNameB = async (search) => {
	
	const baseUrl = "https://www.omdbapi.com/"
	const apiKey = `${process.env.REACT_APP_OMDB_KEY}`
	const url = `${baseUrl}/?apikey=${apiKey}&s=${search}`

	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data;
}

// getMoviesByNameB('batman')
//	.then((data) => console.log(data))


export default getMoviesByNameB;