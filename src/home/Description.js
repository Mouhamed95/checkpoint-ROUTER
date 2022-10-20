import React from "react";
import { Link,useParams } from "react-router-dom";
import { Datas } from "../Datas";
import MovieCard from "../MovieCard";



const Description = () => {
   const {id} = useParams();
   const movie = Datas[id];
   
    return ( 
        <div>
        <Link to= '/'>
        <button>Home</button>
        </Link>
        <p className="texte">
            {movie.description}
        </p>
        <iframe src={movie.annonce} title="youtube videos player" frameborder="0" allow="accelerometer;; autoplay;clipboard-write; encrypte-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>

        </div>
    )
}
 
export default Description;