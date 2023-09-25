import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"
// "https://image.tmdb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg"

function MovieCard({ movie }) {
   const movieList=movie
    return (
        <>
                <h2>{movieList}</h2>     
          <img src={IMAGE_BASE_URL+`${movie.poster_path}`}  alt='vfvd'
        className='w-[110px]'/>  
     

      
     {/* gPbM0MK8CP8A174rmUwGsADNYKD.jpg */}
        </>
    )
}

export default MovieCard