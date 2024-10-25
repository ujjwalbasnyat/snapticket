import React from "react";
import Jeep from '../../../../public/images/jeepss.png'

export default function Taxis() {
	return <div className="mb-20">
		<div className="bg-cover grid grid-cols-1 gap-4 p-5 md:p-20 bg-center " style={{backgroundImage: `url(${Jeep.src})`}}>
			<div className="font-bold md:font-semibold text-lg w-[20%] md:w-[40%]">Make Trip Memorable With Your People</div>
			<div className="w-[50%] md:w-full">Lets Boom with Your Plan and our Our Service</div>
			<button className="md:w-[20%] w-[50%]  p-btn-default rounded-sm bg-primary text-background hover:bg-blue-800">Earn With SnapTicket</button>
			<button className="md:w-[20%] w-[50%] text-background border hover:bg-slate-400 hover:bg-opacity-50 border-1 ring-background p-btn-default rounded-sm ">Download App</button>

		</div>
	</div>;
}
