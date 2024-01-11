import React from 'react'


const Home = () => {
  return (
    <div className='w-full h-screen bg-[#060933]'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'> 
        <h4 className='text-white text-2xl'>Hey There! </h4>
        <p className='text-l text-white '>My name is</p>
        <h1 style={{ fontFamily: 'Comic Sans MS' }} className='text-6xl text-[#FF00FF] font-bold'>MONIKA RAI</h1>
        
        <p className='text-l text-white'>I am a Software Engineer. This is my portfolio. Take a look around. Right now, I am upskilling my Web Dev skills.</p>
      </div>

    </div>
  )
}

export default Home