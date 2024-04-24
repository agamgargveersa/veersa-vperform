import { PageHeader } from 'apps/ui-lib/src/lib'
import React from 'react'
import { settings } from '../../assets/images'

const Settings = () => {
  return (
    <div className='ml-[84px] p-1'>
        <PageHeader title={"Settings"} icon={settings} />
    </div>
  )
}

export default Settings
