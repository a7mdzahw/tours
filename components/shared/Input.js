import { useState } from "react";

const Input = ({ name, label, type, className }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="py-2 w-100">
      <label className="block text-muted text-sm" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type === "password" && show ? "text" : type}
          className={`${className} border-2 border-gray-300 px-3 py-2 rounded  w-100  focus:outline-none focus:border-blue-400`}
          name={name}
          id={name}
        />
        {type === "password" && (
          <div
            className="w-8 h-8 absolute right-2 text-center  cursor-pointer   top-2  rounded"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? <i className="bi bi-eye-slash text-xl"></i> : <i className="bi bi-eye-fill text-xl"></i>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
