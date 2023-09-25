import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import Movielist from './Components/Movielist'
import MovieCard from './Components/MovieCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <Slider/>
       <ProductionHouse/>
       <GenreMovieList/>
       <Movielist/>
       <MovieCard/>
    </>
  )
}

export default App
