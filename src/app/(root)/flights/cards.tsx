import React from 'react'
import Image from 'next/image'
import { MdFlightTakeoff } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdLuggage } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export const Cards = () => {
  return (
    <div className='outline outline-1 outline-black-600 rounded-md p-btn-default'>
        <div className='grid grid-cols-5 gap-5'>
            <div className='col-span-4 grid grid-rows-2 '>
                <div className='grid grid-cols-2 items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src="/images/buddhaairr.png" alt='buddha air' width={30} height={30}/>
                        <div className='font-semibold'>BUDDHA AIR</div>
                        <div className='text-tag'>U4655</div>
                    </div>
                    <div className='text-tag text-yellow-400'>
                       Non-Refundable
                    </div>
                </div>
                <div className='flex'>
                    <div className='grid grid-cols-3 justify-center items-center font-semibold'>
                        <div>
                            <div>14:40</div>
                            <div>KATHMANDU</div>
                        </div>
                        <div className='flex  items-center justify-center bg-primary rounded-100 w-10 h-10 text-background rounded-full'><MdFlightTakeoff/></div>
                        <div>
                            <div>15:05</div>
                            <div>POKHARA</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 text-tag text-slate-400 gap-10'>
                        <div>
                            <div>Duration</div>
                            <div className='flex items-center'>
                                <div className='text-black'><IoMdTime/></div>
                                <div>15 min</div>
                            </div>
                        </div>
                        <div>
                            <div>Luggage</div>
                            <div className='flex items-center'>
                            <div className='text-black'><MdLuggage/></div>
                            <div>20KG</div>
                            </div>
                        </div>
                        <div>
                            <div>Class</div>
                            <div className='flex items-center'>
                            <div className='text-black'><FaStar/></div>
                            <div>E</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cols-span-1 grid grid-cols-1 items-center justify-center'>
                <div className='font-semibold'>NPR 4,076</div>
                <div><button className='bg-primary rounded-sm p-btn-default text-background'>Book Now</button></div>
            </div>
        </div>
    </div>
  )
}
