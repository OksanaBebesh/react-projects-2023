import { useEffect, useState } from 'react'
import './App.css'
import InputComponent from "./components/InputComponent";
import ItemBlocks from "./components/ItemBlocks";
import Loader from "./components/Loader";

const KEY = "5f17aaf7";
const URL = "http://www.omdbapi.com/";


const App: React.FC = () => {
 const [search, setSearch] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTitle.length >= 3) {
      setIsLoading(true)
      fetch(`${URL}?s=${searchTitle}&apikey=${KEY}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.Search);
          setIsLoading(false)
        });
    }
  }, [searchTitle, search, page]);

  return (
    <div className="App">
      <span className="heading">Movies</span>
      <InputComponent
        searchTitle={searchTitle}
        setSearch={setSearch}
        setSearchTitle={setSearchTitle}
      />
      <div className="main">
        {isLoading ? (
          <Loader />
        ) : (
          <ItemBlocks movies={movies} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

export default App
