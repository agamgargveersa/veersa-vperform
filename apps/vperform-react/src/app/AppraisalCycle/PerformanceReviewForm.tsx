import { ToggleSwitch } from 'apps/ui-lib/src/lib'
import React, { useState } from 'react'

const PerformanceReviewForm = () => {
  const [isChecked,setIsChecked] = useState<boolean>(false);
  return (
    <div>
      <div className='gap-1'>
        <div>Instructions and guidelines</div>
        <div className='text-theme-blue'>Please read and understand all the guidelines below before you start with the Self-Appraisal process:</div>
        <ul className='list-disc ml-5'>
          <li>
            <p>The Performance Review Form should reflect the Appraisee's performance on the set Goals and Key Result Areas (KRAs) for the review period preceding this evaluation</p>
          </li>
          <li>
            <p>Utilize this forum to gain more clarity on your Job Titles and responsibilities and future growth paths in the organization.</p>
          </li>
        </ul>
        <div>Please rate yourself on the KRA's based on the rating scale of 1-5 on each KRA Tab/ Section. On the Rating scale</div>
        <div className="overflow-x-auto p-1">
          <table className="table-auto border-collapse border border-gray-500">
            <thead className='bg-custom-table-header'>
              <tr>
                <th className="px-4 py-2 border border-gray-500">Rating Scale</th>
                <th className="px-4 py-2 border border-gray-500">Performance Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-500">5</td>
                <td className="px-4 py-2 border border-gray-500">Outstanding</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">4</td>
                <td className="px-4 py-2 border border-gray-500">Exceed Expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">3</td>
                <td className="px-4 py-2 border border-gray-500">Meets Expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">2</td>
                <td className="px-4 py-2 border border-gray-500">Partially Meets Expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">1</td>
                <td className="px-4 py-2 border border-gray-500">Below Expectations</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className=''> {/* use common input */}

        </div>
        <div className='text-theme-blue'>Add KRA</div>
        {[1,2,3,4].map((item,index)=>(
          <div className=' my-4 rounded-lg border-[1px] border-gray-200 p-5 gap-3 flex flex-col items-start justify-evenly'>
          <div className='flex flex-row items-center justify-start w-full'>
            <div className='py-2 w-1/2'><ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} title={'KRA Name'} /></div>
            <label className="py-2 ml-6 inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                
              />
              <span className="ml-2 text-gray-700">Show Goals against KRA</span>
            </label>
          </div>
          <div className='bg-custom-header w-full'>
            {/* <select className='bg-custom-table-header w-full'>
              <option><p>View Goals</p></option>
            </select> */}
            DropDown
          </div>
          <div className='p-1 rounded-lg border-[1px] border-gray-200'>
            <p className='p-1'>​It reflects your performance on the various Projects (one/ multiple) you have worked on in the First Half of Year 2023.
              It is all about managing work expectations.It covers criteria like the quality of delivery,
              delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.
              You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.
            </p>
          </div>
          <div className='w-full'>add common input component</div>
          </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default PerformanceReviewForm
