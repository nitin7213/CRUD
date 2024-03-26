import React from "react";
import { useLocation } from "react-router-dom";

const UpdateUser = () => {
  const location = useLocation();
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      {location.state}
    </div>
  );
};

export default UpdateUser;
