import "./App.css";
import requests from "./requests";
import ROW from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  // let x = "suman";
  // let y = "puka";
  return (
    <div className="app">
      {/* <h2>{`hello ${x}`}</h2> */}
      {/* <h1>Lets build Netflix Clone Front-end today</h1> */}
      {/* nav */}
      <Nav />
      <Banner />
      <ROW
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <ROW title="Trending Now" fetchUrl={requests.fetchTrending} />
      <ROW title="TopRated" fetchUrl={requests.fetchTopRated} />
      <ROW title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <ROW title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      {/* <ROW title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <ROW title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <ROW title="Documantaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
