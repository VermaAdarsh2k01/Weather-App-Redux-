import React from 'react'
import { useSelector } from 'react-redux'

function Temp() {

    const weatherTemp = useSelector( (state) => state.weather.data)
    const tempCelsius = weatherTemp && Math.round(weatherTemp.main.temp - 273.15);
  return (
    <div className=' w-full h-1/2 max-sm:h-full '>
      {weatherTemp && <p className='text-white text-[180px] leading-none tracking-tighter inter font-black max-sm:text-9xl max-sm:h-full max-sm:text-center'>{tempCelsius}°</p>}
    </div>
  )
}

export default Temp
