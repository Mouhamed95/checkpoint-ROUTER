import React from "react";
import { Datas } from "./Datas";
import { useState } from "react";
import MovieCard from "./MovieCard";



const Formulaire = () => {
   const [recherche, setRecherche] = useState('')

   return (
      <>
      <div className="recherche">
         <input type="text"
               name="search"
               placeholder="Rechercher"
               onChange={e =>  setRecherche(e.target.value) } 
            />
         
            </div>
      
         <div className="MovieListc">
            
            {Datas.filter((val) => {
               if (recherche === '') {
                  return val

               } else if (val.title.toLowerCase().includes(recherche) || val.title.toUpperCase().includes(recherche) ) {
                  return val 
               }
            }).map((movie, key) => {
               return (
                  <MovieCard
                title = {movie.title}
                description = {movie.description}
                postURL = {movie.postURL}
              />
               )
            })}
         </div>

      </>
   )
}
export default Formulaire;