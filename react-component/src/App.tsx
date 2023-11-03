import { useEffect, useState } from 'react'
import './App.css'
import InputComponent from "./components/InputComponent";
import ItemBlocks from "./components/ItemBlocks";
import Loader from "./components/Loader";
import Error from "./components/Error";

const KEY = "5f17aaf7";
const URL = "http://www.omdbapi.com/";


const App: React.FC = () => {
 const [search, setSearch] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] =useState("");

  useEffect(() => {
    if (searchTitle.length >= 3) {
      setIsLoading(true)
      setIsError(false);
      fetch(`${URL}?s=${searchTitle}&apikey=${KEY}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.Response === 'False') {
            setIsError(true);
            setErrorMessage(data.Error);
          }
          if (data.Response) {            
            setMovies(data.Search);
          }
          setIsLoading(false)
        });
    }
  }, [searchTitle]);

  return (
    <div className="App">
      <span className="heading">Movies</span>
      <InputComponent
        searchTitle={searchTitle}
        setSearch={setSearch}
        setSearchTitle={setSearchTitle}
      />
      <div className="main">
        {isLoading && <Loader />}
        {isError && <Error errorMessage={errorMessage} />}  
        <ItemBlocks movies={movies} isLoading={isLoading} setPage={setPage} />
      </div>
    </div>
  );
}

export default App
