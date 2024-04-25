import { PageHeader } from 'apps/ui-lib/src/lib'
import React from 'react'
import { appraiseeView } from '../../assets/images'

const AppraiseeView = () => {
  return (
    <div className='ml-[84px] p-1'>
        <PageHeader title={"Appraisee View"} icon={appraiseeView} />
    </div>
  )
}

export default AppraiseeView
