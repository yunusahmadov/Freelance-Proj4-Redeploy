import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-400  w-full p-3 text-slate-50 text-center flex flex-col gap-2'>
      
        <p className='text-2xl'>Contact us</p>
        <p>We are always open to you</p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=deepnote@gmail.com">deepnote@gmail.com</a>
        <div className='flex justify-center items-center gap-2 sm:flex-row'>
      <i className="fa-brands fa-instagram text-xl cursor-pointer "></i>
      sweet_mishutka
        </div>
        <div className='flex justify-center items-center gap-2 '>
      <i className="fa-brands fa-instagram text-xl cursor-pointer"></i>
       <a href="https://www.instagram.com/kak_duck/">kak_duck</a>
        </div>
      
    </div>
  )
}

export default Footer