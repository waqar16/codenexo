import React from 'react'
import Image from 'next/image'

const CreativeTeam = () => {
  return (
 <div className='p-24 flex flex-col items-center  w-full bg-black/30'>
      <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Creative Member</h1>
      <p className='mt-2 font-light text-base sm:text-lg'>Our Team Members are essential part of our growth</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6'>
        <div className='flex flex-col items-center w-full bg-black/40 rounded-md p-4'>
            <Image src={'/new-team-01.png'} alt="Team member Saim Shahzad" width={300} height={300} loading="lazy" />
            <p className='mt-6 font-bold text-lg'>Saim Shahzad</p>
           <p className='text-sm font-light mt-2'>Mern Stack Developer</p>
        </div>
        <div className='flex flex-col items-center w-full bg-black/40 rounded-md p-4'>
            <Image src={'/new-team-01.png'} alt="Team member Waqar Ahmed Khan" width={300} height={300} loading="lazy" />
             <p className='mt-6 font-bold text-lg'>Waqar Ahmed Khan</p>
            <p className='text-sm font-light mt-2'>Django Developer</p>
        </div>
        <div className='flex flex-col items-center w-full bg-black/40 rounded-md p-4'>
            <Image src={'/new-team-01.png'} alt="Team member Hamza Khan" width={300} height={300} loading="lazy" />
            <p className='mt-6 font-bold text-lg'>Hamza Khan</p>
            <p className='text-sm font-light mt-2'>Bitcoin Developer</p>
        </div>
      </div>

    </div>
  )
}

export default CreativeTeam