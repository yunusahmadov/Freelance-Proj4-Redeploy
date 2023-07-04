import React from 'react'
import header from '../Header/header1.gif'
function Header() {
  return (
    <div className='flex w-full justify-center flex-col items-center relative z-20'>
      <img className='w-[25vw] lg:w-[30vw] '  src={header}/>
      <h1 className='text-[1.8vw] pt-3 pb-2'>A place where you can order or buy art for your story, ad, website, game, etс.</h1>
      <h2  className='text-[2vw] pb-5'>Choose your style</h2>
    </div>
  )
}

export default Header