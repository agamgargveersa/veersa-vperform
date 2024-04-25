import { PageHeader } from 'apps/ui-lib/src/lib'
import React from 'react'
import { performance } from '../../assets/images'
const PerformanceModule = () => {
  return (
    <div className='ml-[84px] p-1'>
        <PageHeader title={"Performance Module"} icon={performance} />
    </div>
  )
}

export default PerformanceModule
