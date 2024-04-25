import React, { useState } from 'react';
import EmployeeList from './EmployeeList';

const AppraiseeView = () => {
  const [activeTab, setActiveTab] = useState('employeeList');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className='ml-20'>
      <div className="flex border-b border-gray-200 mt-5">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'employeeList'
              ? 'text-gray-700 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabClick('employeeList')}
        >
          Employee List
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'myAppraisalForm'
              ? 'text-gray-700 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabClick('myAppraisalForm')}
        >
          My Appraisal Form
        </button>
      </div>
      <div className="py-4">
        {activeTab === 'employeeList' && (
          <div>
            {/* <p>This is the Employee List tab.</p> */}
            <EmployeeList/>
          </div>
        )}
        {activeTab === 'myAppraisalForm' && (
          <div>
            <p>This is the My Appraisal Form tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppraiseeView;