import { PageHeader } from 'apps/ui-lib/src/lib'
import React from 'react'
import { appraisalCycle } from '../../assets/images'
import AppraisalCycleTable from './AppraisalCycleTable'

interface Props{
    setSelectedOption:Function
}

const AppraisalCycle = ({setSelectedOption}:Props) => {
  return (
    <div className='ml-[84px] p-1 overflow-hidden h-[570px]'>
        <PageHeader title={"Appraisal Cycle"} icon={appraisalCycle} />
        <AppraisalCycleTable  setSelectedOption={setSelectedOption}/>
    </div>
  )
}

export default AppraisalCycle
