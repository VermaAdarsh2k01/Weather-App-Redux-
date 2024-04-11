import React from 'react'
import City from './City'
import Temp from './Temp'
import Info from './Info'

function Leftfirst() {
  return (
    <div className='w-[45%] h-full flex flex-col max-sm:flex-row max-sm:w-[100%] max-sm:h-[35%] 2xl:w-[35%]'>
        <div className=' max-sm:flex max-sm:w-full max-sm:h-full '>
          <City/>
          <Temp/>
        </div>
        <div>
        <Info/>
        </div>
    </div>
  )
}

export default Leftfirst
