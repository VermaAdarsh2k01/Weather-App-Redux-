import React from 'react'
import { useSelector } from 'react-redux' 


function Desc() {

    const weatherDesc = useSelector( (state) => state.weather.data)

  return (
    <>
      <div className=' h-[40%] flex flex-col gap-5 items-end max-sm:w-full max-sm:items-center max-sm:flex-row  max-sm:justify-center '>
          {weatherDesc && <p className='text-white max-sm:text-sm 2xl:text-3xl'>Your area would be experiencing {weatherDesc.weather[0].description}</p>}
          <div className='w-[50px] h-[50px] rounded-full bg-[#57aaff] 2xl:h-[100px] 2xl:w-[100px]'>
              {weatherDesc && <img 
                  src={`http://openweathermap.org/img/wn/${weatherDesc.weather[0].icon}.png`} 
                  alt="weather icon"
                  className='z-1 2xl:h-[100px]'
              />}
          </div>
      </div>
    </>
  )
}

export default Desc
