import React from 'react';
import { useSelector } from 'react-redux';

function City() {
  const weatherData = useSelector((state) => state.weather.data);

  return (
    <div className= 'mb-8 w-full max-sm:w-[100%]'>
        {weatherData && <p className='text-white inter font-bold text-3xl ps-1 w-full max-sm:text-3xl'>{weatherData.name} ,</p>}
        {weatherData && <p className='text-white px-1 '>{weatherData.sys.country}</p>}
    </div>
  );
}

export default City;

