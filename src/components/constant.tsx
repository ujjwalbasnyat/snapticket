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
        name : "Jeep",
        icon: <MdOutlineLocalTaxi/>,
        path: "/taxis"
    },
]

export const mainHeadline = "Your Journey Start Here";
export const subHeadline = "All your travel in one place just a click away";

export const transportOptions = ['Bus', 'Flight', 'Taxi']

export const datepicker = ['24 Thu', '25 Fri', '26 Sat', '27 Sun', '28 Mon']


export const imageData = [
    {
        name: "Bhaktapur",
        img: '/images/bhaktapur.jpg',
    },
    {
        name: "Illam",
        img: '/images/illam.jpg',
    },
    {
        name: "Kalinchowk",
        img: '/images/kalinchowk.jpeg',
    },
    {
        name: "Pokhara",
        img: '/images/pokhara.webp',
    },
    {
        name: "Kathmandu",
        img: '/images/ktm.jpg',
    },
]