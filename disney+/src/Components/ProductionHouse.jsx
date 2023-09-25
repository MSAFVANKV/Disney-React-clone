import React from 'react'

import starwarV from './../assets/videos/starwars.mp4'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGV from './../assets/videos/nationalG.mp4'
import pixarV from './../assets/videos/pixar.mp4'

import disney from './../assets/img/disney.png'
import marvel from './../assets/img/marvel.png'
import nationalG from './../assets/img/nationalG.png'
import pixar from './../assets/img/pixar.png'
import starwar from './../assets/img/starwar.png'


function ProductionHouse() {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalG,
            video:nationalGV
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:5,
            image:starwar,
            video:starwarV
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item)=>(
            <div className="border-[2px] border-gray-600
            rounded-md hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl shadow-black">
                <video src={item.video} autoPlay loop playsInline 
                className='absolute top-0 rounded-md z-0 opacity-0
                hover:opacity-50'/>
                <img src={item.image} alt="" className='w-full z-[1]'/>
                
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse