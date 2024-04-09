import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-blue-500 text-white p-4 text-center">ERROR 404</div>
      <div className="h-screen ">
        <button
          type="button"
          className="text-center flex mx-auto  text-white bg-green-400 p-4 rounded-full mt-5"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
