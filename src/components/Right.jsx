import React from 'react'
import { useSelector } from 'react-redux'
import { FaArrowUp } from "react-icons/fa";

function Right() {

  const weatherTemp = useSelector( (state) => state.weather.data)
  const maxTemp = weatherTemp && Math.round(weatherTemp.main.temp_max - 273.15)
  const minTemp = weatherTemp && Math.round(weatherTemp.main.temp_min - 273.15)
  return (
    <div className='w-[40%] h-full bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-center px-6 gap-10 max-sm:w-full max-sm:px-1 max-sm:h-[40vh]'>
      <div className='flex h-1/2 w-full  gap-4 items-end justify-between max-sm:items-end '>
        <p className='inter text-white font-bold text-9xl max-sm:text-8xl 2xl:text-[200px] 2xl:leading-none'>
          Max
        </p>
        <p className='text-white pb-3 text-5xl 2xl:text-8xl inter'>
          {maxTemp}
        </p>
        <FaArrowUp className='pb-3 text-[#9ADE89] transform rotate-45 2xl:mb-2 ' size='4rem'/>
      </div>
      <div className='flex h-1/2 w-full gap-4 items-start justify-between'>
        <div className='flex w-full  gap-4 items-end justify-around flex-row-reverse '>
          <p className='inter text-white font-bold text-9xl  max-sm:text-8xl 2xl:text-[200px] 2xl:leading-none'>
            Min
          </p>
          <p className='text-white pb-3 text-5xl 2xl:text-8xl inter'>
            {minTemp}
          </p>
          <FaArrowUp className='pb-3 text-[#9ADE89] transform rotate-230 2xl:mb-2 ' size='4rem'/>
        </div>
      </div>
    </div>
  )
}

export default Right
