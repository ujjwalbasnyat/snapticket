"use client";
import React, { useState, useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Cards from "./Cards"; // Adjust the import path as needed

interface Tag {
  isOpen: boolean;
  tagTitle: string;
  tagColor: string;
}

interface CardData {
  desc: string;
  filesize: string;
  close: boolean;
  tag: Tag;
}

const Add_Card: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cards, setCards] = useState<CardData[]>([]);
  const [formData, setFormData] = useState<CardData>({
    desc: "",
    filesize: "",
    close: false,
    tag: {
      isOpen: false,
      tagTitle: "",
      tagColor: "blue", // Default color
    },
  });

  const reference = useRef<HTMLDivElement>(null); // Reference for drag constraints

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      tag: {
        ...prev.tag,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add new card data to the state
    setCards((prev) => [...prev, formData]);
    // Reset form data
    setFormData({
      desc: "",
      filesize: "",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "",
        tagColor: "blue",
      },
    });
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <div>
      <div
        className="flex justify-center items-center text-sky-100 group h-15 w-15 rounded-full bg-green-500 z-[4] hover:scale-150 cursor-pointer"
        onClick={toggleForm}
      >
        <CiCirclePlus className="text-3xl" />
      </div>

      {isFormOpen && (
        <form
          className="mt-4 p-4 border border-gray-300 rounded bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-2 text-lg font-bold">Add Item</h2>
          <input
            type="text"
            name="desc"
            placeholder="Enter item description"
            value={formData.desc}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full mb-2"
            required
          />
          <input
            type="text"
            name="filesize"
            placeholder="Enter file size"
            value={formData.filesize}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full mb-2"
            required
          />
          <input
            type="text"
            name="tagTitle"
            placeholder="Enter tag title"
            value={formData.tag.tagTitle}
            onChange={handleTagChange}
            className="border border-gray-400 p-2 rounded w-full mb-2"
          />
          <select
            name="tagColor"
            value={formData.tag.tagColor}
            onChange={handleTagChange}
            className="border border-gray-400 p-2 rounded w-full mb-2"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}

      {/* Wrap the cards in a div with the reference */}
      <div
        className="mt-4 flex flex-wrap gap-4"
        ref={reference}
        style={{ position: "relative", width: "100%", height: "auto" }} // Allow flexible height
      >
        {cards.map((card, index) => (
          <Cards key={index} data={card} reference={reference} />
        ))}
      </div>
    </div>
  );
};

export default Add_Card;
