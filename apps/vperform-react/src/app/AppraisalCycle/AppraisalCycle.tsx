import { PageHeader } from 'apps/ui-lib/src/lib'
import React, { useState } from 'react'
import { appraisalCycle } from '../../assets/images'
import AppraisalCycleTable from './AppraisalCycleTable'
import ManageAppraiseeList from './ManageAppraiseeTable'

interface Props{
    setSelectedOption:Function
}

const AppraisalCycle = ({setSelectedOption}:Props) => {
  const [manageAppraiseeListClicked,setManageAppraiseeListClicked] = useState<boolean>(false);
  return (
    <div className='ml-[84px] p-1 overflow-hidden h-[570px]'>
        <PageHeader title={manageAppraiseeListClicked?'Manage Appraisee List':'Appraisal Cycle'} icon={appraisalCycle} />
        {!manageAppraiseeListClicked?<AppraisalCycleTable setManageAppraiseeListClicked={setManageAppraiseeListClicked}  setSelectedOption={setSelectedOption}/>
        :<ManageAppraiseeList setManageAppraiseeListClicked={setManageAppraiseeListClicked}/>}
    </div>
  )
}

export default AppraisalCycle
