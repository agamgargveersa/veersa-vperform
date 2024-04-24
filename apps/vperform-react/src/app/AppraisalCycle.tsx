import React, { useState } from 'react';
import { appraisalCycle, deleteIcon, editIcon, manageAppraisee, noRecordsIcon, setting1, settings } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import {  Modal, PageHeader, SearchInput, TableHeader } from 'apps/ui-lib/src/lib';
import PerformanceReviewForm from './PerformanceReviewForm';

interface Props{ // for navbar
  setSelectedOption:Function
}
const AppraisalCycle = ({setSelectedOption}:Props) => {
    const data = [{
        nameOfAppraisal:'Appraisal_2024_2',
        startDate:'20-June-2024',
        endDate:'20-June-2024',
        status: 'pending'
    },
    {
      nameOfAppraisal:'Appraisal_2024_2',
      startDate:'20-June-2024',
      endDate:'20-June-2024',
      status: 'pending'
  },
  {
    nameOfAppraisal:'Appraisal_2024_2',
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

  const [showConfigAppraisalModal,setShowConfigAppraisalModal] = useState<boolean>(false);
  const [showPerformanceFormModal,setShowPerformanceFormModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const showManageAppraisee =  () => {
    navigate('/manageappraiseelist');
  }

  
  return (

    <div className='p-1 overflow-hidden h-[550px]'>
      <div className='flex flex-row items-center justify-between w-full py-1'>
        <SearchInput />
        <div onClick={()=>setShowConfigAppraisalModal(true)} className='p-2 border-[2px] rounded-md border-theme-blue flex flex-row items-center'><img className=' pr-1' src={setting1} /><button>Configure Appraisal Cycle</button></div>
      </div>
      <Modal innerJsx={<PageHeader icon={appraisalCycle} title={'mdgkm'} />} showModal = {showConfigAppraisalModal} setShowModal={setShowConfigAppraisalModal} logo={appraisalCycle} title='Configure Appraisal Cycle' content='frg' action='Done' />
      <Modal innerJsx = {<PerformanceReviewForm/>} logo={appraisalCycle} title='Performance Review Form Details' content='' action='Done' setShowModal={setShowPerformanceFormModal} showModal={showPerformanceFormModal}/>
      <div className='h-[500px] overflow-auto'>
        <table className="min-w-full divide-y divide-gray-200 ">
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
              <tr className=' bg-custom-table-row ' key={index}>
                <td onClick={()=>setShowPerformanceFormModal(true)} className=" cursor-pointer px-6 py-4 whitespace-nowrap underline text-theme-blue">{item.nameOfAppraisal}</td>
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
      </div>
        {data.length===7?<div className='text-center mt-40 flex flex-row items-center justify-center'>
          <span className='h-12 w-12 rounded-full flex flex-row items-center justify-center  bg-slate-200'><img className='h-8 w-8 rounded-lg  ' src={noRecordsIcon} /></span>
          <span>No records available, configure appraisal cycle to initiate the process</span>
        </div>:null}
      {/* <TableHeader tableHead = {tableHead} /> */}
    </div>
  );
}

export default AppraisalCycle;
