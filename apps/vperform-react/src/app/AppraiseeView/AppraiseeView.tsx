import { PageHeader } from 'apps/ui-lib/src/lib'
import React from 'react'
import { useState } from 'react'
import EmployeeList from './EmployeeList'
import { appraiseeView } from '../../assets/images'
import MyAppraisalForm from './MyAppraisalForm'
import RejectionFeedback from './RejectionFeedback'

const AppraiseeView = () => {
  const [activeTab, setActiveTab] = useState('employeeList');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <div className='ml-[5.25rem] p-1'>
        <PageHeader title={"Appraisee View"} icon={appraiseeView} />
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
            {/* <p>This is the My Appraisal Form tab.</p> */}
            <MyAppraisalForm/>
          </div>
        )}
      </div>
    </div>


  )
}

export default AppraiseeView
