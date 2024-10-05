import React from "react";

interface InputFieldProps {
  type: string;
  name: string; // Include the name prop
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name} // Bind the name prop to the input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-blue-100 m-3 rounded-md p-2 w-full"
    />
  );
};

export default InputField;
