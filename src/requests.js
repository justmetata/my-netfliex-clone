const TheApiKey = "";

// https://api.themoviedb.org/3/movie/550?api_key=8d51cf094ac62d1ff80c93fc1319a6fe

const requests = {
  // fetchTrendingnow:`/trendingnow/all/week/?api_key=${TheApiKey}&language=en-US`,
  fetchonlyonnetflix: `/discover/tv?api_key=${TheApiKey}&with_networks=213`,

  fetchNetflixOriginal: `/discover/tv?api_key=${TheApiKey}&with_networks=213`,

  fetchTrendingnow: `/trending/all/week?api_key=${TheApiKey}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${TheApiKey}&language=en-US&page=1`,
  fetchOrigins: `/discover/tv?api_key=${TheApiKey}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${TheApiKey}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=35`,
  fetchHorror: `/search/movie?api_key=${TheApiKey}&language=en- 
                  US&query=horror&page=1&include_adult=false`,
  fetchRomanceMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=10749`,
  fetchDocumantries: `/discover/movie?api_key=${TheApiKey}&with_genres=99`,

  // }
};
export default requests;

// netflixAPI
// AIzaSyADNBfx2rGccvV9vZYfIrwijbwyUrggaBc

// https://api.themoviedb.org/3/trending/all/day?api_key=8d51cf094ac62d1ff80c93fc1319a6fe
