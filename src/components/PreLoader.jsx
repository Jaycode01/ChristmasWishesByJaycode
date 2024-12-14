import React from 'react'
import { FaTree } from 'react-icons/fa'

const PreLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-bottom">
    <div className="text-center text-white">
      <h1 className=" flex justify-center text-6xl font-bold mb-4 animation-writing font-Inspiration">
       <span><FaTree /></span>
       <span className='capitalize text-white'>merry christmas to you!</span>
      </h1>
    </div>
  </div>
  )
}

export default PreLoader
