"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import myImage from "../../public/images/Footer.jpg";
import myMobile from "../../public/images/mobile screen.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {
  FaApple,
  FaGooglePlay,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaTwitter, // Use the default Twitter icon
} from "react-icons/fa";
import myLogo from "../../public/images/S.png";
import { MdOutlineCopyright } from "react-icons/md";
import { usePathname } from "next/navigation"; // Corrected hook

function Footer() {
  const pathname = usePathname(); // Access current pathname

  // Hide footer on the /feedback page
  if (pathname === "/feedback") {
    return null;
  }

  return (
    <div>
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${myImage.src})` }}
      >
        <div className="absolute"></div>
        <div className="relative z-10 flex items-center justify-between h-full">
          <div className="flex flex-col md:flex-row mx-10 justify-between">
            <div className="my-10 flex flex-col gap-10">
              <p className="md:w-[60%] text-background font-semibold text-md md:text-lg">
                Plan, Book, and Explore Install SnapTicket App
              </p>
              <div className="text-background flex">
                <div className="grid grid-rows-2">
                  <div className="flex items-center gap-1">
                    <IoIosCheckmarkCircle className="text-checkmark" />
                    <p className="font-semibold">Get Notified</p>
                  </div>
                  <p className="w-[50%] ml-6 font-regular">
                    When the bus starts and is about to reach you.
                  </p>
                </div>
                <div className="grid grid-rows-2">
                  <div className="flex items-center gap-1">
                    <IoIosCheckmarkCircle className="text-checkmark" />
                    <p>Lightning Fast</p>
                  </div>
                  <p className="w-[50%] ml-6 font-regular">
                    Book in 30 seconds even on Low Network.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-background font-semibold text-md">
                  Download SnapTicket App
                </div>
                <div className="flex justify-start gap-5">
                  <button className="bg-background rounded-sm p-btn-default flex items-center justify-between gap-5">
                    <FaApple className="text-lg" />
                    <div>
                      <p>Download on the</p>
                      <p className="font-semibold">Apple Store</p>
                    </div>
                  </button>
                  <button className="flex items-center justify-between gap-5 bg-black text-background rounded-sm p-btn-default outline outline-1 outline-background">
                    <FaGooglePlay className="text-lg" />
                    <div>
                      <p>GET IT ON</p>
                      <p className="font-semibold">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="rotate-4 hover:-rotate-6 transform transition duration-300 ease-in-out z-10">
              <Image
                src={myMobile}
                alt="mobile screen"
                width={250}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary grid md:grid-cols-5 p-10">
        <ul className="flex flex-col items-center gap-5">
          <li className="flex flex-col justify-center items-center">
            <Image src={myLogo} alt="logo" width={50} height={70} />
            <div className="font-semibold flex">
              <section className="text-black">Snap</section>
              <section className="text-background">Ticket</section>
            </div>
            <p className="text-background">Your Journey Start Here</p>
          </li>
          <div className="text-background">
            <li>Enquiry:</li>
            <li>support@snapticket.com</li>
          </div>
        </ul>
        <ul className="text-background">
          <li className="font-semibold text-md">Company</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="text-background">
          <li className="font-semibold text-md">Product</li>
          <li>Flights</li>
          <li>Taxis</li>
          <li>Buses</li>
        </ul>
        <ul className="text-background">
          <li className="font-semibold text-md">Support</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>T&C</li>
        </ul>
        <div className="grid grid-rows-3 gap-5">
          <button className="bg-black rounded-sm p-btn-default flex text-background items-center justify-between gap-5">
            <FaApple className="text-lg" />
            <div>
              <p>Download on the</p>
              <p className="font-semibold">Apple Store</p>
            </div>
          </button>
          <button className="flex items-center justify-between gap-5 bg-black text-background rounded-sm p-btn-default">
            <FaGooglePlay className="text-lg" />
            <div>
              <p>GET IT ON</p>
              <p className="font-semibold">Google Play</p>
            </div>
          </button>
          <div className="text-background">
            <div>Follow Us:</div>
            <div className="flex text-md pt-2 justify-between">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
              <FaTwitter /> {/* Standard Twitter icon */}
              <FaTiktok />
            </div>
            <div>
              <Link href="/feedback" className="text-sm m-5 p-5">
                Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background bg-primary py-3 flex items-center justify-center text-background gap-5">
        <div className="flex items-center gap-2 border-r border-background pr-4">
          <MdOutlineCopyright /> 2024 SnapTicket
        </div>
        <div>All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
