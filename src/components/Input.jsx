import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setWeatherData } from '../features/weatherDataSlice';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

function Input() {

    const [input , setInput] = useState("")
    const dispatch = useDispatch()
  
    function handleChange(e) {
      setInput(e.target.value)
    }
  
    async function handleSearch(e) {
      e.preventDefault()
   
      const apiKey = "d925f616009d403c7bf25be562416b47"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
      const response = await axios.get(url);
      
      dispatch(setWeatherData(response.data))
      console.log(response.data)
    }
   
  
return (
    <div className='w-[45%]  h-[6%] flex gap-5 items-center justify-center  max-sm:w-[100%] '>
        <form 
          className='w-[80%] h-full max-sm:h-[60%] max-sm:w-[70%]'
          onSubmit={handleSearch}
        >
          <input
            className='w-full h-full rounded-2xl ps-5 bg-[#1E1E1E] text-white  '
            type='text'
            placeholder='Enter your city'
            value={input}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSearch}><FaSearch className='text-white'/></button>
        
      </div>
  )
}

export default Input
