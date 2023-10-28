import {useEffect, useState} from "react";
import InputComponent from "./components/InputComponent";
import ItemBlocks from "./components/ItemBlocks";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import "./App.css";

const KEY = '5f17aaf7';
const URL = 'http://www.omdbapi.com/';

function App() {
  const [search, setSearch] = useState(false);
  const [searchTitle, setSearchTitle] =useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  
  useEffect(() => {
    if (searchTitle.length >=3) {
    fetch(`${URL}?s=${searchTitle}&apikey=${KEY}&page=${page}`).then((res) => res.json()).then((data)=> {
      console.log(data.Search);
      setMovies(data.Search);
    });
  }
    
  },[searchTitle, search, page])
  
  return (
    <div className="App">
      <span className="heading">Movies</span>
      <InputComponent searchTitle={searchTitle} setSearch={setSearch}  setSearchTitle={setSearchTitle} />
      <div className="main">
      {movies === undefined ? <Loader /> : <ItemBlocks movies={movies} setPage={setPage} /> }
      
      </div>
      
    </div>
  );
}

export default App;
