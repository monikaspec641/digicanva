import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#060933] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FF00FF]'>
                        About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm: text-right text-2xl font-bold'>
                    <p>
                    I'm Monika Rai and I am trying build my portfolio. 
                        </p>

                </div>
                <div>
                    <p>
                    A passionate learner and an effective communicator with strong conceptual thinking and problem-solving skills, having tremendous flair for creativity. Proven leadership ability and interpersonal skills. Thorough professional who strives for excellence in every endeavor of professional career
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default About