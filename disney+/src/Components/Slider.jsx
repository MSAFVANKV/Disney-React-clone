import React, { useEffect, useRef, useState } from 'react'
import Globalapi from '../Services/Globalapi'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth
// "/4DxHcIQfw3ungfQVqupJ8K62M3d.jpg"

// imported icons
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2'

function Slider() {
  const [movieList, setMovieList]=useState([]);
  const elementRef = useRef()
  useEffect(()=>{
    getTrendingMovies();
  },[])

  const getTrendingMovies = () =>{
    Globalapi.getTrendingVideos
    .then(resp=>{
      console.log(resp.data.results)
      setMovieList(resp.data.results)
    })
    .catch(error => {
      console.error("Error fetching trending movies:", error);
      // Handle the error appropriately.
  });

 
  }
  const sliderRight=(element)=> {
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=> {
    element.scrollLeft-=screenWidth-110
  }

  return (
    <div className="">
      <HiChevronLeft  className=' hidden md:block text-white text-[30px] absolute
            mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute
            mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none
    scroll-smooth' ref={elementRef}  >
      {movieList.map((item,index)=>(
        <img src={IMAGE_BASE_URL+item.backdrop_path} 
        className='min-w-full md:h-[310px] object-cover
        object-left-top mr-5 hover:border-[1px] border-gray-400
        transition-all duration-100 ease-in'/>
      ))}
    </div>
    </div>
  )
}

export default Slider