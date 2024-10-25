'use client'
import React, {useState} from "react";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { datepicker } from "@/components/constant";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import Plane from '../../../../public/images/myPlane.png';
import { TicketsNavigation } from "./navigation";
import { Filters } from "./filters";
import { Cards } from "./cards";


export default function Flights() {
	const[showCounter, setShowCounter] = useState(false)
	const[count, setCount] = useState(1)
	const[count2, setCount2] = useState(0)
	const[selectedIndex, setSelectedIndex] = useState(0)

	const handleClick = () => {
		setShowCounter(!showCounter)
	}

	const handleItemClick = (index) => {
		setSelectedIndex(index)
	}
	

	function Counter() {

		const increment = () => {
			
				setCount(count + 1)
			
		}
	
		const decrement = () => {
			if(count!==0){
				setCount(count => (count > 1 ? count -1 : 1))
			}
		}
		return(
			<div className="flex justify-between text-tag">
				<div className="flex gap-2">
					<strong>Adult</strong>
					<p>12 yrs & above</p>
				</div>
				<div className=" flex justify-between items-center outline outline-1 outline-secondary rounded-sm">
				<button onClick={decrement}><BiMinus/></button>
				<div className="bg-secondary px-3">{count}</div>
				<button onClick={increment}><GoPlus/></button>
				</div>
			</div>
		)
	}
	function SecondCounter(){
		
	const increment2 = () => {
		setCount2(count2+1)
	}

	const decrement2 = () => {
		if(count2!==0){
			setCount2(count2 - 1)
		}
	}
		return(
			<div className="flex justify-between text-tag">
				<div className="flex gap-2">
					<strong>Child</strong>
					<p>12 yrs & below</p>
				</div>
				<div className="flex justify-between items-center outline outline-1 outline-secondary rounded-sm">
				<button onClick={decrement2}><BiMinus/></button>
				<div className="bg-secondary px-3">{count2}</div>
				<button onClick={increment2}><GoPlus/></button>
				</div>
			</div>
		)
	}

	const TotalSum = count + count2;

	return(
		<div className="mb-20">
			<div className="p-10  bg-center bg-no-repeat" style={{backgroundImage: `url(${Plane.src})`}}>
			<div className="grid grid-cols-1 mx-10 justify-center  my-10 py-10 rounded-sm">
				
				<div className=" bg-background  rounded-sm grid grid-rows-1">
					<div className="flex gap-6  items-center pt-5 px-10">
					<form className="flex gap-6">
						<label><input type = "radio" name = "n_way" id = "one_way" value = "One Way" />One Way</label>
						<label><input type = "radio" name = "n_way" id = "two_way" value = "Two Way"/>Two way</label>
					</form>
						<div>
							<div className="absolute top-[23%] outline outline-1 outline-black-600 px-4 py-2 flex flex-col gap-3 rounded-sm bg-background z-30">{showCounter && <Counter/>} {showCounter && <SecondCounter/>}</div>
							<button onClick={handleClick} className=" bg-secondary px-6 py-2 flex items-center justify-between"><MdOutlineAirlineSeatReclineExtra/><div>{TotalSum} Passenger</div><IoMdArrowDropdown/></button>
						</div>
					</div>
					<div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 md:justify-between gap-6  p-10 md:rounded-sm">
						
						<div className="outline outline-1 outline-black-600 rounded-sm px-4 py-2">
							<label>From<input type="text" placeholder="eg: KATHMANDU" className="focus:outline-none"/></label>
						</div>
						<div className="outline outline-1 outline-black-600 rounded-sm px-4 py-2">
							<label>To <br/><input type="text" placeholder="eg: POKHARA" className="focus:outline-none"/></label>
						</div>
						<ul className="flex justify-between items-center gap-3">
							{datepicker.map((datepicker, index)=>( <li className={`cursor-pointer text-tag px-3 py-4 rounded-sm ${selectedIndex === index ? ' bg-primary text-background' : 'outline outline-1 outline-black-600'}`}  key={index} onClick={()=>handleItemClick(index)}>{datepicker}</li>))}</ul>
						<button className="outline outline-1 bg-primary text-background rounded-sm font-normal md:w-full w-80">
						SEARCH
						</button>
					</div>
					
				</div>
			</div>
		</div>
		<TicketsNavigation />
		<div className="grid grid-cols-1 md:grid-cols-3 mx-20 gap-10">
			<div className="col-span-2 grid grid-cols-1 gap-3">
				
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				
			</div>
			<div className="col-span-1"><Filters /></div>
		</div>
		</div>
	)
}





