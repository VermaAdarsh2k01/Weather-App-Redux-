import React from 'react'
import { useSelector } from 'react-redux'
import { WiHumidity } from "react-icons/wi";
import { MdOutlineCompress } from "react-icons/md";
import { FaWind } from "react-icons/fa";


function Extra() {

    const weatherUpdates = useSelector( (state) => state.weather.data)
  return (
    <div className='flex w-full h-full pt-5 gap-4 items-end inter max-sm:pt-0' >
      <div className='flex-1 bg-[#57aaff] w-full h-[80%] rounded-2xl flex flex-col justify-center gap-4 items-center text-white max-sm:h-full '>
          <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'>
            <WiHumidity size='4rem' className='z-2 text-[#57aaff]'/>
          </div>
          <p className='font-semibold text-xl 2xl:text-4xl'>
            Humidity
          </p>
          <p className='text-2xl 2xl:text-4xl'>
            {weatherUpdates && weatherUpdates.main.humidity}
          </p>
      </div>
      <div className={`flex-1 bg-[#57aaff] w-full h-[80%] rounded-2xl flex flex-col justify-center gap-4 items-center text-white max-sm:h-full`}>
        <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'>
          <MdOutlineCompress size='4rem' className='text-[#57aaff] p-2'/>
        </div>
        <p className='font-semibold text-lg 2xl:text-4xl'>
          Pressure
        </p>
        <p className='text-2xl 2xl:text-4xl'>
          {weatherUpdates && weatherUpdates.main.pressure}
        </p>
      </div>
      <div className={`flex-1 bg-[#9ade89] w-full h-[80%] rounded-2xl flex flex-col justify-center gap-4  items-center text-white max-sm:h-full`}>
        <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center p-2'>
          <FaWind  size='4rem' className='text-[#9ade89]'/>
        </div>
        <p className='font-semibold text-lg text-center 2xl:text-4xl'>
          Wind Speed
        </p>
        <p className='text-2xl 2xl:text-4xl'>
          {weatherUpdates && weatherUpdates.wind.speed}
        </p>
      </div>
    </div>
  )
}

export default Extra
