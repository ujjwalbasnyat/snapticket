'use client'
import React, {useState} from 'react';
import {transportOptions} from "./constant";
import { CgArrowsExchangeAlt, CgArrowsExchangeAltV } from "react-icons/cg";

 export const HomepageSearchBar = () => {
    const [selectedTransport, setSelectedTransport] = useState("");

	const handleChange = (e)=>{
		setSelectedTransport(e.target.value);
	}
  return (
        <div className="bg-neutral-400 bg-opacity-50 p-10 flex flex-col md:flex-row place-items-start gap-2 md:gap-2 lg:gap-4 rounded-md w-full max-w-screen-xl mx-auto">
		<select  className="w-full md:w-60 bg-background rounded-sm p-btn-default  text-btn-default focus:outline-none focus:ring-1 focus:ring-primary">
            <option value="" hidden>From   eg:Kathmandu</option>
            <option>Kathmandu</option>
            <option>Pokhara</option>
            <option >Birjung</option>
            <option>Bharatpur</option>
        </select>
        <div className='bg-background rounded-sm'>
            <CgArrowsExchangeAlt className='hidden md:flex text-md '/>
            <CgArrowsExchangeAltV className='flex md:hidden'/>
        </div>
		<select  className="w-full md:w-60 bg-background rounded-sm p-btn-default  text-btn-default focus:outline-none focus:ring-1 focus:ring-primary">
            <option value="" hidden>To eg:Pokhara</option>
            <option>Kathmandu</option>
            <option>Pokhara</option>
            <option >Birjung</option>
            <option>Bharatpur</option>
        </select>
        <div className='grid justify-items-end gap-1'>
        <input type="date" className="w-full md:w-auto bg-background rounded-sm text-btn-default p-btn-default"/>
        <div className='flex gap-1 text-tag text-primary'>
        <button className='bg-background px-1 py-0.5 '>Today</button>
        <button className='bg-background px-1 py-0.5 '>Tomorrow</button>
        </div>
        </div>
		
		<select 
				 id="transport" 
				 value={selectedTransport}
				onChange={handleChange}
				className="w-full md:w-auto bg-background rounded-sm p-btn-default text-btn-default" >
					<option value="" disabled defaultValue="Travelling by ?" hidden >Travelling by ?</option>
					{transportOptions.map((transport,index)=>(
						<option key={index} value={transport} className="bg-background rounded-none">{transport}</option>
					))}

		</select>
		<button className=" w-full md:w-auto bg-primary text-background p-btn-sm rounded-sm text-btn-default font-normal">Search</button>
	</div>
  )
}
