import React from 'react'

const PerformanceReviewForm = () => {
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
        
      </div>
    </div>
  )
}

export default PerformanceReviewForm
