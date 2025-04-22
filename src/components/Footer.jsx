import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-400 flex flex-col justify-center items-center gap-1.5 rounded-tl-3xl rounded-tr-3xl'>
        <div>
        <h1 className='text-2xl font-bold'> 
        <span className='text-fuchsia-500'>&lt;  My</span> Watch<span className='text-fuchsia-500'>list /&gt;</span></h1>
        </div>
         <div className='flex gap-1.5 justify-center items-center'>
      Created with<img className='w-7 m-2' src='/icon/heart.png' alt='' />by Khushi Shah  
        </div>
    </div>
  )
}

export default Footer
