import React from 'react'

export const Filters = () => {
  return (
    <div className='bg-background outline outline-1 outline-black rounded-md p-5 grid grid-cols-1 gap-10'>
        <div className='  border-b-[1px] border-black pb-4'>Filters</div>
        <div>
            <div>Price</div>
            <div className=' border-b-[1px] border-black pb-4'>
                <label className='flex items-center gap-2'><input type="checkbox" name='price_range'  value="Lowest Price" /> Lowest Price</label>
                <label className='flex items-center gap-2'><input type="checkbox" name='price_range'  value="Highest Price" /> Highest Price</label>
            </div>
        </div>
        <div className='border-b-[1px] border-black pb-4'>
            <div>Airlines</div>
            <div>
            <label className='flex items-center gap-2'><input type="checkbox" name='SHREE AIRLINES'  value="YETI AIRLINES" />YETI AIRLINES</label>
            <label className='flex items-center gap-2'><input type="checkbox" name='SHREE AIRLINES'  value="SHREE AIRLINES" />SHREE AIRLINES</label>
            </div>
        </div>
        <div className='border-b-[1px] border-black pb-4'>
            <div>Ticket Type</div>
            <div>
            <label className='flex items-center gap-2'><input type="checkbox" name='Refundable'  value="Refundable" />Refundable</label>
            <label className='flex items-center gap-2'><input type="checkbox" name='Refundable'  value="Highest Price" />Non-Refundable</label>
            </div>
        </div>
        <div>
            <div>Duration</div>
            <div>
            <label className='flex items-center gap-2'><input type="checkbox" name='duration'  value="Refundable" />Shortest First</label>
            <label className='flex items-center gap-2'><input type="checkbox" name='duration'  value="Highest Price" />Longest First</label>
            </div>
        </div>
    </div>
  )
}
