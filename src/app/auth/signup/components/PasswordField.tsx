import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

interface PasswordFieldProps {
  name: string; // Include the name prop
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name} // Bind the name prop to the input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-blue-100 m-3 rounded-md p-2 w-full"
      />
      <button
        type="button"
        onClick={handleVisibility}
        className="absolute right-2 top-2"
      >
        {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
      </button>
    </div>
  );
};

export default PasswordField;
