import React from 'react'
import Left from './Left'
import Right from './Right'
import Bottom from './Bottom'

function Hero() {
  return (
    <div className='w-full h-full px-3 py-3 flex flex-col items-center justify-center'> 
      <div className='flex w-full h-full px-6 py-5 gap-6 items-center justify-center max-sm:flex-col max-sm:px-0'>
        <Left/>
        <Right/>
      </div>
      {/* <Bottom/> */}
    </div>
  )
}

export default Hero
