import React from 'react'
import {imageData} from './constant'
import Image from 'next/image';


export const Populardestination = () => {
  
  return (
    <div className='my-10 mx-10 flex flex-col gap-5 '>
      <div className='font-bold text-md text-primary'>Popular Destinations</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 '>
        {imageData.map((item,index)=>(
          <div key={index} className='max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 '>
            <Image  src={item.img} width={200} height={170} alt={item.name} className='  object-cover rounded-md mb-4'/>
            <div className=" font-semibold text-center">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
