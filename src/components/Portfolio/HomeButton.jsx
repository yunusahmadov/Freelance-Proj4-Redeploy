import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeButton() {
    const navigate=useNavigate()

    function GoHome() {
        navigate("/")
    }

  return (
   <button className='bg-slate-600 p-2  ' onClick={GoHome}>
    <i class="fa-solid fa-arrow-left text-slate-50"></i>
   </button>
  )
}

export default HomeButton