import React from 'react';
import Pagination from "./Pagination"
interface Movies {
  imdbID: string,
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
}

interface Props {
  movies: Movies[],
  setPage: React.Dispatch<React.SetStateAction<number>>,
  isLoading: Boolean
}

const ItemBlocks: React.FC<Props> = ({movies, setPage, isLoading}) => {
    
    return (
      <>
            {(!isLoading) && <Pagination  setPage={setPage}/>}
            <div className="collection">
              {movies?.map((movie) => { return <div className="imageBlock" key={movie.imdbID}>
                <p className="title">{movie.Title}</p> 
              <img src={movie.Poster} alt={movie.Title} />
              </div>
            })}
            </div>
      </>)
    }

    export default ItemBlocks;