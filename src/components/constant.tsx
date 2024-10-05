import { RiPlaneFill } from "react-icons/ri";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { MdOutlineLocalTaxi } from "react-icons/md";

type NavItem = {
    name: string;
    icon: JSX.Element;
    path: string;
};

export const    NavData : NavItem[] = [
    {
        name : "Buses",
        icon: <MdOutlineDirectionsBus/>,
        path: "/buses"
    },
    {
        name : "Flights",
        icon: <RiPlaneFill/>,
        path: "/flights"
    },
    {
        name : "Taxis",
        icon: <MdOutlineLocalTaxi/>,
        path: "/taxis"
    },
]
