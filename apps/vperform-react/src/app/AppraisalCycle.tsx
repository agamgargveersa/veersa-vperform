import React, { useState } from 'react';
import { deleteIcon, editIcon, manageAppraisee, noRecordsIcon } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import { Modal, TableHeader } from 'apps/ui-lib/src/lib';

interface Props{
  setSelectedOption:Function
}
const AppraisalCycle = ({setSelectedOption}:Props) => {
    const data = [{
        nameOfAppraisal:'Samarth',
        startDate:'20-June-2024',
        endDate:'20-June-2024',
        status: 'pending'
    },
    {
      nameOfAppraisal:'Samarth',
      startDate:'20-June-2024',
      endDate:'20-June-2024',
      status: 'pending'
  },
  {
    nameOfAppraisal:'Samarth',
    startDate:'20-June-2024',
    endDate:'20-June-2024',
    status: 'pending'
},

{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},
{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},
{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},]
interface Tableheader{
  headerName:String,
  fontStyle:String,
  fontColour:String,
  fontSize:String,
  fontWeight:String,
  paddingX:String,
  paddingY:String,
  align:String,
  letterSpacing:String
  
}
interface Props{
  tableHead:Array<Tableheader>
}
  const tableHead = [
    {
      headerName:"NAME OF THE APPRAISAL",
      fontStyle:"mkm",
      fontColour:"gray-500",
      fontSize:"xs",
      fontWeight:"medium",
      paddingX:"6",
      paddingY:"3",
      align:"left",
      letterSpacing:"wider"

    },
    {
      headerName:"MANAGE APPRAISEES",
      fontStyle:"",
      fontColour:"gray-500",
      fontSize:"xs",
      fontWeight:"medium",
      paddingX:"6",
      paddingY:"3",
      align:"left",
      letterSpacing:"wider"

    },
    {
      headerName:"START DATE",
      fontStyle:"",
      fontColour:"gray-500",
      fontSize:"xs",
      fontWeight:"medium",
      paddingX:"6",
      paddingY:"3",
      align:"left",
      letterSpacing:"wider"

    },
    {
      headerName:"END DATE",
      fontStyle:"",
      fontColour:"gray-500",
      fontSize:"xs",
      fontWeight:"medium",
      paddingX:"6",
      paddingY:"3",
      align:"left",
      letterSpacing:"wider"

    },
    {
      headerName:"STATUS",
      fontStyle:"",
      fontColour:"gray-500",
      fontSize:"xs",
      fontWeight:"medium",
      paddingX:"6",
      paddingY:"3",
      align:"left",
      letterSpacing:"wider"
    },
    {
      headerName:"ACTIONS",
      fontStyle:"",
      fontColour:"gray-500",
      fontSize:"xs",
      fontWeight:"medium",
      paddingX:"6",
      paddingY:"3",
      align:"left",
      letterSpacing:"wider"

    }
  ]


  const navigate = useNavigate();

  const showManageAppraisee =  () => {
    navigate('/appraiseeview');
    setSelectedOption('appraiseeview');
  }

  const [openModal,setOpenModal] = useState(true)
  return (

    <div>
      <div>
        <div><input type='search' /></div>
        <div>configure</div>
      </div>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-custom-table-header">
        <tr >
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name of Appraisal
          </th>
          <th scope="col" className="px-6 py-3  text-xs text-center font-medium text-gray-500 uppercase tracking-wider">
            Manage Appraisees
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Start Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            End Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      {data.length!==7?<tbody className="bg-white divide-y divide-gray-200 ">
        {data.map((item,index)=>(
          <tr className=' bg-custom-table-row' key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{item.nameOfAppraisal}</td>
            <td onClick={()=>{showManageAppraisee()}} className="px-6 py-4 whitespace-nowrap flex flex-row justify-center"><img src={manageAppraisee} /></td>
            <td className="px-6 py-4 whitespace-nowrap">{item.startDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.endDate}</td>
            <td className="px-4 py-2 whitespace-nowrap "><div className='rounded-md px-2 py-2 text-[#CFA100] font-medium bg-[#FFFBDB]'>Pending</div></td>
            <td className="px-6 py-4 gap-6 whitespace-nowrap flex flex-row items-center">
              <img className=' bg-white p-1' src={editIcon} />
              <img className=' bg-white p-1' src={deleteIcon}/>
            </td>

          </tr>
        ))}
        
        
      </tbody>:null}
    </table>
      {data.length===7?<div className='text-center mt-40 flex flex-row items-center justify-center'>
        <span className='h-12 w-12 rounded-full flex flex-row items-center justify-center  bg-slate-200'><img className='h-8 w-8 rounded-lg  ' src={noRecordsIcon} /></span>
        <span>No records available, configure appraisal cycle to initiate the process</span>
      </div>:null}
      {/* <TableHeader tableHead = {tableHead} /> */}
    </div>
  );
}

export default AppraisalCycle;
