import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Nav from "./Nav";
import Banner from "./Banner";
// import axios from 'axios';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="ONLY ON NETFIEX"
        fetchUrl={requests.fetchTrendingnow}
        isLargeRow
      />
      {/* <Row title="Netflix Original" fetchUrl={requests.fetchNetflixoriginal}/> */}

      <Row title="Trending Now" fetchUrl={requests.fetchDocumantries} />

      <Row title="top Rated" fetchUrl={requests.fetchTopRatedMovies} />

      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy movies " fetchUrl={requests.fetchComedyMovies} />

      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
