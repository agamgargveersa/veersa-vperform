import React from 'react';
import { useState } from 'react';

    const data = [
      {
        employee: 'Lorem ipsum',
        managerRating: null,
        status: 'Pending',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: null,
        status: 'Manager Evaluation in progress',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: 5,
        status: 'HR Evaluation in progress',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: null,
        status: 'Pending',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: 5,
        status: 'Completed',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: 5,
        status: 'Completed',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: null,
        status: 'Pending',
      },
      {
        employee: 'Lorem ipsum',
        managerRating: 5,
        status: 'Completed',
      },
    ];
    
    const EmployeeList = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      }

      return (
        <div >
    <div className="flex justify-end items-center">
        <input
          type="text"
          placeholder="Search..."
        //   value={searchTerm}
        //   onChange={handleSearch}
         className=" px-3 py-2  mr-80 border border-gray-400 rounded" />
        <img src=" " alt="" className="px-4 py-4 rounded-md bg-gray-200  mr-2"/>
        <img src=" " alt="" className="px-4 py-4 rounded bg-gray-200 mr-2"/>
        <div className="relative">
      <button
        onClick={toggleDropdown}
        className=" text-blue-700 px-4 py-2 rounded border-solid border-2 border-indigo-500  "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>

        </div>
      <div className=" sm:-mx-6 lg:-mx-8">
        <div className=" sm:px-6 lg:px-8">
          <div >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className='text-left' >
                  <th className="px-6 py-3  text-gray-500">
                    Employee </th>
                    <th className="px-6 py-3    text-gray-500">
                    Manager's Rating</th>
                    <th className="px-6 py-3 text-gray-500">
                    Status</th>
                    <th className="px-6 py-3 text-gray-500">
                    Appraisal Form</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{item.employee}</td>
                  <td className="px-6 py-4">{item.managerRating || '-'}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        item.status === 'Pending'
                          ? 'bg-red-200 text-red-800'
                          : item.status === 'Manager Evaluation in progress'
                          ? 'bg-yellow-200 text-yellow-800'
                          : item.status === 'HR Evaluation in progress'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-green-200 text-green-800'
                      }`}
                    >
                      {item.status }
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <img src="" alt=""/>
                  <a href="#" className="inline-flex items-center px-4 py-2 text-blue underline ">View Form</a>
                  </td>
                </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeList;