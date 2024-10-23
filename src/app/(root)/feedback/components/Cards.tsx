"use client";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

// Define the structure of the tag
interface Tag {
  isOpen: boolean;
  tagTitle: string;
  tagColor: string;
}

// Define the structure of the data prop
interface Data {
  desc: string;
  filesize: string;
  close: boolean;
  tag: Tag;
}

// Define the props interface for the Cards component
interface CardsProps {
  data: Data;
  reference: React.RefObject<HTMLElement>; // Adjust the type based on what reference is
}

const Cards: React.FC<CardsProps> = ({ data, reference }) => {
  const tagColorClass = `${data.tag.tagColor}-600`;

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }} // Slightly scale up while dragging
      dragElastic={0.1}
      className="absolute w-60 rounded-[18px] bg-sky-100 p-5 overflow-hidden"
      style={{ height: "300px", top: "0", left: "0" }} // Ensure it starts from the top-left of the screen
    >
      <FaRegFileAlt size={25} />
      <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="Footer absolute bottom-0 w-full left-0">
        <div
          className="flex justify-between items-center p-3"
          style={{ height: "55px" }}
        >
          <h5 className="text-sm">{data.filesize}</h5>
          <span
            className={`flex justify-center items-center bg-${data.tag.tagColor}-600 rounded-full p-2 cursor-pointer`}
            aria-label={data.close ? "Close" : "Download"}
          >
            {data.close ? (
              <IoClose size={20} />
            ) : (
              <MdDeleteOutline size={20} color="black" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full bg-${data.tag.tagColor}-600 flex justify-center items-center text-sm font-semibold`}
            style={{ height: "20px" }}
          >
            <h3 style={{ padding: "6px" }}>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
