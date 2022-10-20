import React  from "react";
import Add from "./Add";
import { Datas } from "./Datas";
import Formulaire from "./Formulaire";
import MovieCard from "./MovieCard";


const MovieList = () => {
     return (
          <div className='MovieListc'>
         
            <Formulaire />

            <div className="movies-container">
            {
              Datas.map((movie)=>(
                <>
                <MovieCard
                  id={movie.id}
                  title = {movie.title}
                  description = {movie.description}
                  postURL = {movie.postURL}
                  />
              </>
              ))
            }
            </div>

            <Add />
        </div>
     )

}


export default MovieList; 