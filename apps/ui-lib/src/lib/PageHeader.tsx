import React from 'react'

interface PageHeader{
    title:String,
    icon : any
}

const PageHeader = ({title,icon}:PageHeader) => {
  return (
    <div className='rounded-lg bg-theme-blue flex flex-row  items-center justify-start font-medium'>
      <div className='p-2'><img  src={icon} /></div>
      <div className='p-2 text-white'>{title}</div>
    </div>
  )
}

export default PageHeader
