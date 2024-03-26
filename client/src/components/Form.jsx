import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [users, setUsers] = useState([
    { Name: "nitin", Email: "nitineon123@gmail.com", Age: 21 },
  ]);

  return (
    <div>
      <div className="bg-blue-500 text-white p-4 text-center">
        CRUD OPERATION
      </div>
      <div className="flex justify-end mr-16">
        <Link to="create" state={"Create User"}>
          {" "}
          <button className="mt-20 bg-green-500 text-white p-3 rounded-xl">
            Add User
          </button>{" "}
        </Link>
      </div>
      <div className=" text-center p-16">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-6 text-xs text-center font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                  Name
                </th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                  Email
                </th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                  Age
                </th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {users.map((user, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                        {user.Name}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white">
                        {user.Email}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                        {user.Age}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap">
                        <Link to="update" state={"Update User"}>
                          <button className="mr-3 text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                          </button>{" "}
                        </Link>
                        <button className="text-blue-600 dark:text-blue-500 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
