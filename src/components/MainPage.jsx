import React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function MainPage() {
  return (
    <div className='flex flex-col justify-between h-[100vh]'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default MainPage