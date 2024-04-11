import React from 'react'
import { useSelector } from 'react-redux'

function Info() {

    const weatherInfo = useSelector( (state) => state.weather.data)
    const infoConversion = weatherInfo && Math.round(weatherInfo.main.feels_like - 273.15);
  return (
    <div className="flex flex-col text-zinc-400 inter text-xl justify-center h-full max-sm:hidden 2xl:text-4xl">
        {weatherInfo && <p>Feels like</p>}
        {weatherInfo && <p>{infoConversion}°</p>}
    </div>
  )
}

export default Info
