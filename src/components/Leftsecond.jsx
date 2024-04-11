import React from 'react'
import Desc from './Desc'
import Extra from './Extra'

function Leftsecond() {
  return (
    <div className='w-[55%] h-full flex flex-col pe-3 max-sm:w-full max-sm:h-[80%] max-sm:pe-0 2xl:w-[65%]'>
      <Desc/>
      <Extra/>
    </div>
  )
}

export default Leftsecond
