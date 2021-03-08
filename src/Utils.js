// // original function to fetch list of films with .then
// const getMoviesByNamePromise = (query) => {
// 	let apiKey = `${process.env.REACT_APP_OMDB_KEY}`
// 	let baseUrl = "https://www.omdbapi.com/"
// 	let endpoint = "?s"
// 	let url = `${baseUrl}?apikey=${apiKey}&s=${query}`
// 	console.log(url);
// 	fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log("result returned:", data);
// 		})
// }

// original function to get single film details by ID
// const getMovieDetailsById = (ev) => {
// 	let apiKey = `${process.env.REACT_APP_OMDB_KEY}`
// 	fetch("https://www.omdbapi.com/?i=" + ev + "&apikey=" + apiKey)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log("result returned:", data);
// 		})
// }

// refactored function to fetch details with async, await
const getResultById = async (search) => {
	const apiKey = `${process.env.REACT_APP_OMDB_KEY}`
	const baseUrl = "https://www.omdbapi.com/"
	const url = baseUrl + "?i=" + search + "&apikey=" + apiKey
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data;
}



// refactored function to fetch list of films with async, await
const getResultsByName = async (search, type="movie", page=1) => {
	
	const baseUrl = "https://www.omdbapi.com/"
	const apiKey = `${process.env.REACT_APP_OMDB_KEY}`
	const url = `${baseUrl}/?apikey=${apiKey}&s=${search}&type=${type}&page=${page}`

	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data;
}


export {getResultsByName, getResultById};