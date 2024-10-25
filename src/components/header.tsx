"use client"
import React, {useState} from "react";
import { NavData } from "./constant";
import Link from "next/link";

export default function Header() {
	const [active, setActive] = useState<string>("");
	const handleActive = (name: string) => {
		setActive(name);
	}
	const resetActive = () => {
		setActive("");
	}
	return (
	<div className=" sticky top-0 z-50 flex bg-background justify-between px-10 py-5  cursor-pointer items-center">
		<Link href="/" className="font-semibold text-md text-primary" onClick={()=>resetActive()}>SnapTicket</Link>
		<ul className="flex gap-10 items-center font-normal">
			{NavData.map((item)=>(<li  key={item.name} onClick={()=> handleActive(item.name)}><Link href={item.path} className={`flex items-center gap-3 hover:text-primary ${active === item.name ? "text-primary font-semibold" : "text-foreground font-normal"}`}><span>{item.icon}</span><span>{item.name}</span></Link></li>))}
			</ul>
		<div className="flex gap-5 items-center ">
			<Link href="/auth/login" className="hover:text-primary hover:bg-secondary outline outline-1 outline-primary rounded-sm px-3 py-2 " onClick={()=>resetActive()}>Login</Link>
			<Link href="/auth/signup" className="hover:text-secondary text-background bg-primary rounded-sm px-3 py-2" onClick={()=>resetActive()}>Signup</Link>
		</div>

	</div>
	);
}
