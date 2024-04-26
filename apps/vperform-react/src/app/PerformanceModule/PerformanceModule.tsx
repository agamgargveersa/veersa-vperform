import {
  PageHeader,
  SearchInput,
  ConfirmationPopUp,
  Modal,
} from 'apps/ui-lib/src/lib';
import React, { useState } from 'react';
import {
  performance,
  setting1,
  cross,
  filterIcon,
  noRecordsIcon,
  manageAppraisee,
  editIcon,
  deleteIcon,
} from '../../assets/images';

const PerformanceModule = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const KRA_Data = [
    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Dev',
      weightage: 10,
    },
    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Dev',
      weightage: 15,
    },
    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Dev',
      weightage: 20,
    },
    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Consulting',
      weightage: 10,
    },
    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Dev',
      weightage: 15,
    },

    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Dev',
      weightage: 20,
    },
    {
      name: 'Result Orientation',
      Description: 'lorem ipsum',
      stream: 'Consulting',
      jobTitle: 'Dev',
      weightage: 10,
    },
  ];

  return (
    <>
      {/* creating grid view for left and right part of the page */}
      <div className="bg-[#F5F5F7] grid grid-cols-5 h-screen">
        {/* left part of the page (sidebar included) */}
        <div className="bg-white h-screen col-span-1">
          <div
            className="ml-10 my-3 flex justify-center"
            style={{ height: 'fit-content' }}
          >
            {/* <img className="pr-1" src={editIcon} alt="" /> */}
            <button className="text-center py-1 border-[2px] px-3 rounded-sm border-theme-blue">
              Add new Module
            </button>
          </div>
          <div className="ml-10 py-5 text-center flex justify-center border-y-2 border-gray-200 font-sans">
            Performance Module
          </div>
          <div className="py-5">
            <ul className="my-2">
              <li className="flex justfiy-center">
                <p className="text-black">KRA</p>
              </li>
              <li className="flex justfiy-center">
                <p className="text-black hover:bg-blue">Goals</p>
              </li>
            </ul>
          </div>
        </div>

        {/* right part of the page */}
        <div className="h-screen col-span-4 ml-[1.25rem] flex flex-col">
          {/* including page header only */}
          <div className="bg-[#f3f2f2] py-[10px] px-2">
            <PageHeader title={'KRA'} icon={performance} />
          </div>

          {/* rest of the right part */}
          <div className="bg-white w-full">
            <ConfirmationPopUp
              showPopup={showPopup}
              setShowPopup={setShowPopup}
            />
            <div className="flex p-3 flex-row justify-between items-center border-y-2 border-gray-200">
              <SearchInput />
              <div className="flex flex-row justify-evenly">
                <img
                  className="px-3 border-[0.125rem] border-gray-200"
                  src={editIcon}
                  alt=""
                />
                <img
                  className="px-3 mx-3 border-[0.125rem] border-gray-200"
                  src={filterIcon}
                  alt=""
                />
                <div className="flex flex-row border-[2px] px-3 rounded-sm border-theme-blue">
                  <img className="pr-1" src={editIcon} alt="" />
                  <button className="text-center py-1">Add new KRA</button>
                </div>
              </div>
            </div>
            <div
              className={`h-${
                KRA_Data.length === 0 ? 'h-fit' : '[31.25rem]'
              } overflow-auto`}
            >
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-custom-table-header">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs text-center font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Stream
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Weightage
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                {KRA_Data.length !== 0 ? (
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {KRA_Data.map((item, index) => (
                      <tr
                        className={`text-sm text-[#404041] ${
                          index % 2 === 1 ? 'bg-custom-table-row' : 'bg-white'
                        }`}
                        key={index}
                      >
                        <td className=" cursor-pointer px-6 py-4 whitespace-nowrap]">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap flex flex-row justify-center">
                          {item.Description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.stream}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.jobTitle}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap ">
                          <div
                            className={`rounded-md px-2 py-2 font-medium ${
                              item.weightage <= 10
                                ? 'text-[#DE2B04] bg-[#FCEAE6]'
                                : item.weightage < 20
                                ? 'text-[#CFA100] bg-[#FFFBDB]'
                                : 'text-[#469075] bg-[#E5F6F0]'
                            }`}
                          >
                            {item.weightage}
                          </div>
                        </td>
                        <td className="px-6 py-4 gap-6 whitespace-nowrap flex flex-row items-center">
                          <img className=" bg-white p-1" src={editIcon} />
                          <img
                            onClick={() => setShowPopup(true)}
                            className=" bg-white p-1"
                            src={deleteIcon}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : null}
              </table>
            </div>
            {KRA_Data.length === 0 ? (
              <div className="text-center mt-28 flex h-20 flex-row items-center justify-center">
                <span className="h-12 w-12 rounded-full flex flex-row items-center justify-center  bg-slate-200">
                  <img className="h-8 w-8 rounded-lg  " src={noRecordsIcon} />
                </span>
                <span>
                  No records available, configure appraisal cycle to initiate
                  the process
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceModule;