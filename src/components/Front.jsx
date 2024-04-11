import React from 'react'
import Input from './Input'
import Hero from './Hero'
import { useSelector } from 'react-redux'

function Main() {

  const weather = useSelector( (state) => state.weather.data)

  return (
    <div className='w-[85%] h-[90%] bg-[#111015] rounded-2xl flex flex-col items-center py-5 max-sm:w-[100%] max-sm:h-[100%] max-sm:rounded-none max-sm:px-1'>
      <Input/>
      {weather && <Hero/>}
    </div>
  )
}

export default Main
