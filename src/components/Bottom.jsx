import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationCrosshairs } from "react-icons/fa6";

function Bottom() {
    const weatherdesc = useSelector( (state) => state.weather.data)
  return (
    <div className='w-[97%] h-[15%] bg-[#1E1E1E] rounded-2xl flex items-center justify-center gap-10 text-white'>
        <p>Your latitude is {weatherdesc.coord.lat}°</p> 
        <FaLocationCrosshairs />
        <p>Your longitudde is {weatherdesc.coord.lon}°</p>
    </div>
  )
}

export default Bottom
