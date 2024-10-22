import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

interface PasswordFieldProps {
  name: string;
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
    <div className="relative w-full max-w-md mx-auto">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-blue-100 m-3 rounded-md p-2 w-full pr-12" // added pr-12 to make space for the button
      />
      <button
        type="button"
        onClick={handleVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600"
      >
        {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
      </button>
    </div>
  );
};

export default PasswordField;
