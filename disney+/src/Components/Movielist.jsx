import React, { useEffect, useState } from 'react'
import Globalapi from '../Services/Globalapi'
import MovieCard from './MovieCard';
// const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

function Movielist({genereId}) {

    const [movieList,setMovieList]=useState([])
    useEffect(()=>{
        getMovieByGenereId();
    },[genereId])

    const getMovieByGenereId = ()=> {
        Globalapi.getMovieByGenreId(genereId)
        .then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
  return (
    <div>
        {movieList.map((item,index)=>(
            <MovieCard key={item.id} movie={item} />
            //  <img src={IMAGE_BASE_URL+item.poster_path}/>

        ))}
    </div>
  )
}

export default Movielist