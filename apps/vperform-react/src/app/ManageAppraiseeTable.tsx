import React, { useState } from 'react';
import { filterIcon, membersIcon, sampleProfilePic } from '../assets/images';
import SearchInput from 'apps/ui-lib/src/lib/InputSearch';

const ManageAppraiseeList: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const data = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    // Additional data rows...
  ];

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const ids = data.map((item) => item.id);
      setSelectedRows(ids);
    } else {
      setSelectedRows([]);
    }
  };

  const toggleRowSelection = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-between w-full py-1'>
        <div className='p-1 flex flex-row items-center justify-start gap-2'>
          <div>Filter by</div>
          <SearchInput />
        </div>
        <div className='p-1 flex flex-row items-center justify-start gap-3 mr-4'>
          <div className='bg-custom-table-header p-2 rounded-md'>254 Selected</div>
          <div>Total Employees(s): </div>
          <div><img src={membersIcon} /></div>
          <div>254</div>
          <div className=' border-[1px] p-2 rounded-sm border-black'><img src={filterIcon} /></div>
        </div>
        
      </div>
    
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-custom-table-header">
          <tr>
            <th scope="col" className="px-6 py-3 flex flex-row justify-start">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee
            </th>
            
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reviewer
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item,index) => (
            <tr className={`${index%2==0?' bg-custom-table-row':'bg-white'}`} key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => toggleRowSelection(item.id)}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex flex-row items-center">
                <div className='rounded-full'><img className='h-8 w-8 rounded-full' src={sampleProfilePic}/></div>
                <span>{item.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAppraiseeList;
