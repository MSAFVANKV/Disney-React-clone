import React, { useState } from 'react'
import HeaderItem from './HeaderItem'

// imported imgs
import logo from '../assets/img/logo-d-plus.svg'
import { HiHome,HiMagnifyingGlass,
        HiStar,HiPlayCircle,
        HiTv} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical} from 'react-icons/hi'

function Header() {
    const [toggle,setToggle]=useState(false)
    const menu = [
        {
            name:"HOME",
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon:HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:"ORIGINALS",
            icon:HiStar
        },
        {
            name:"MOVIES",
            icon:HiPlayCircle
        },
        {
            name:"SERIES",
            icon:HiTv
        },
       
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className="flex  gap-8 items-center">
            <img src={logo} className='w-[80px]
            md:w-[100px] object-cover mx-4' />
            <div className="md:flex hidden gap-8">
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </div>
            {/*  */}
            <div className="flex md:hidden gap-5">
                {menu.map((item,index)=>index<3&&(
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
                <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical}/>
                   {toggle? <div className="absolute mt-3 bg-[#0121212]
                    border-[1px] border-gray-700 px-5 p-4 rounded-lg">
                    {menu.map((item,index)=>index>2&&(
                                                                                                            <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
                    </div>:null}
                </div>
            </div>                                                                     
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev"
        className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header