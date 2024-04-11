import React from 'react'
import Leftfirst from './Leftfirst'
import Leftsecond from './Leftsecond'

function Left() {
  return (
    <div className='bg-[#1E1E1E] w-[60%] h-full rounded-2xl px-5 py-5 flex gap-1 max-sm:w-[100%] max-sm:h-[70%] max-sm:flex-col max-sm:items-center  max-sm:px-2 '>
        <Leftfirst/>
        <Leftsecond/>
    </div>
  )
}

export default Left
