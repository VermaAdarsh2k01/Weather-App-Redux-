import React from 'react'
import { useSelector } from 'react-redux' 


function Desc() {

    const weatherDesc = useSelector( (state) => state.weather.data)

  return (
    <>
      <div className=' h-[40%] flex flex-col gap-5 items-end max-sm:w-full max-sm:items-center max-sm:flex-row  max-sm:justify-center '>
          {weatherDesc && <p className='text-white max-sm:text-sm'>Your area would be experiencing {weatherDesc.weather[0].description}</p>}
          <div className='w-[50px] h-[50px] rounded-full bg-[#57aaff] '>
              {weatherDesc && <img 
                  src={`http://openweathermap.org/img/wn/${weatherDesc.weather[0].icon}.png`} 
                  alt="weather icon"
                  className='z-1'
              />}
          </div>
      </div>
    </>
  )
}

export default Desc
