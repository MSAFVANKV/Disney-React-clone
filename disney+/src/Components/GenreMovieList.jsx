import React from 'react'
import GenresList from '../Constant/GenresList'
import Movielist from './Movielist'

function GenreMovieList() {
  return (
    <div className=''>
        {GenresList.genere.map((item,index)=>index<=4&&(
            <div className="p-8 px-8 md:px-16">
                <h2 className='text-[20px] text-white font-bold
                '>{item.name}</h2>
                <Movielist genereId={item.id} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList