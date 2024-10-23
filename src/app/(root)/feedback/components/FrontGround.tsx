"use client";
import React, { useRef } from "react";
import Cards from "./Cards";
import Add_Card from "./Add_Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      id: 1, // Unique ID for each item
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "FeedBack", tagColor: "green" },
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "FeedBack", tagColor: "purple" },
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "FeedBack", tagColor: "red" },
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "FeedBack", tagColor: "purple" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] top-0 left-0 flex flex-wrap gap-5 p-5"
      style={{ overflow: "hidden" }} // Prevents overflow
    >
      {data.map((item) => (
        <Cards key={item.id} data={item} reference={ref} /> // Use unique key
      ))}

      <div className="absolute bottom-4 right-4">
        <Add_Card />
      </div>
    </div>
  );
}

export default Foreground;
