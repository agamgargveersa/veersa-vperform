import InputField from 'apps/ui-lib/src/lib/InputField'
import DropDown from 'apps/ui-lib/src/lib/DropDown'
import edit from '../assets/images/edit.png'
import { useState } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import React from 'react'

const ConfigurationForm = () => {
    const [stream, setStream] = useState<string|undefined>()
    const [job, setJob] = useState<string|undefined>()
    const [ratingType, setRatingType] = useState<string|undefined>()
    const [rating,SetRating]=useState<string>('Outstanding')
    const [value, setValue] = useState('');

    const handleInputChange=(event:any)=>{
        SetRating(event.target.value)
    }

    const streamOptions=[{
        name:'xyz',
        id:'1'
    },
    {
        name:'xyz2',
        id:'2'
    }]

    const jobOptions=[{
        name:'qwe1',
        id:'1'
    },
    {
        name:'qwe2',
        id:'2'
    }]

    const ratingTypeOptions=[
        {
            name:'dhruv',
            id:'1',
        },
        {
            name:'dhruv',
            id:'1',
        },
    ]
  return (
    <>
        <div className="container">
            <div className="section pl-6">
                <div className="flex w-full gap-6 mb-6">
                    <div className='w-[33%]'>
                        <InputField id='name' label='Name of the appraisal *' width='full' placeholder='Enter'/>
                    </div>
                    <div className='w-[33%]'>
                        <InputField label='Appraisal cycle period *' width='full' placeholder='Enter'/>
                    </div>
                </div>
                <div className="flex w-full gap-6">
                    <div className='w-[68.5%]'>
                        <InputField id='description' label='Description *' height='16' width='full' placeholder='Enter Description'/>
                    </div>
                    <div className="w-[25%]">
                        <InputField label='Name of the appraisal *' width='full' placeholder='Enter'/>
                        <div className="upload-condition font-normal text-[0.875rem] pl-[5px]">Upload upto 10mb</div>
                    </div>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>
            
            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Appraisal Process Configuration Details
                </div>
                <div>
                    <InputField label='Name of the appraisal *' width='1/3' placeholder='Enter'/>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>
            
            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Module(s) to be included
                </div>
                <div className='bg-[#F0F7FFA6] w-[75%] pt-3.5 pb-3.5 pl-6 pr-6 rounded-sm'>
                    <div className='font-semibold text-sm'>
                        Performance Modules to be included <span className='text-[red]'>*</span>
                    </div>
                    <div className="flex">
                        <div className="flex items-center me-4">
                            <input id="inline-checkbox" type="checkbox" value="kra" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-checkbox" className="ms-2 text-sm text-gray-900 dark:text-gray-300">KRA</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="inline-2-checkbox" type="checkbox" value="goals" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-2-checkbox" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Goals</label>
                        </div>
                    </div>   
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Applicable for
                </div>
                <div className="border w-[75%] pt-3.5 pb-3.5 pl-6 pr-6 rounded-sm">
                    <div className='font-normal text-sm pb-3.5'>
                        Date of joining <span className='text-[red]'>*</span>
                    </div>
                    <div className="flex mb-6">
                        <div className="flex items-center me-4">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-radio" className="font-normal ms-2 text-sm text-gray-900 dark:text-gray-300">Until</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="inline-2-radio" className="font-normal ms-2 text-sm text-gray-900 dark:text-gray-300">From & To</label>
                        </div>
                    </div>
                    <InputField label='Name of the appraisal *' width='1/2' placeholder='Enter'/>
                </div>
                <div className="mt-6 flex gap-6">
                    <div className='flex w-1/4'>
                        <DropDown label="Stream" onChange={setStream} 
                            options={streamOptions} width="w-full" defaultValue="Select Stream"/>
                    </div>
                    <div className='flex w-1/4'>
                        <DropDown label="Job title" onChange={setJob} 
                            options={jobOptions} width="w-full" defaultValue="Select Job Title"/>
                    </div>
                </div>  
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6">
                <div className='flex gap-6'>
                    <div className="w-1/4">
                        <DropDown label="Choose rating type" onChange={setRatingType} 
                            options={ratingTypeOptions} width="w-full" defaultValue="Rating type"/>
                    </div>
                    <div className="checkbox-container">
                        <div className='font-semibold text-sm'>
                            Set mandatory
                        </div>
                        <div className="flex">
                            <div className="flex items-center me-4">
                                <input id="inline-checkbox" type="checkbox" value="rating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-checkbox" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Rating</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="inline-2-checkbox" type="checkbox" value="comment" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="inline-2-checkbox" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Comment</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Rating and score range
                </div>
                <div className='bg-[#F9F9F9] border font-normal text-sm px-6 py-3.5 w-[75%] rounded-sm'>
                    Rating will be selected automatically in the review form based on the 
                    configured score range. However, the reviewer can edit it manually. To restrict 
                    the manual edit, enable Lock rating option 
                </div>
                <div className="flex items-center me-4 mt-6 mb-6">
                    <input id="lockRating" type="checkbox" value="lockRating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="lockRating" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Lock Rating</label>
                </div>
                <div className="rating-container">
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' value={rating} onChange={handleInputChange}/>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' value='5'/>
                        <img src={edit} className='h-[0.85rem] self-center'/>
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' value="Exceed Expectations"/>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' value='4-5'/>
                        <img src={edit} className='h-[0.85rem] self-center'/>
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' value="Meets Expectations"/>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' value='3-4'/>
                        <img src={edit} className='h-[0.85rem] self-center'/>
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' value="Partially Meets Expectations"/>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' value='2-3'/>
                        <img src={edit} className='h-[0.85rem] self-center'/>
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' value="Below Expectations"/>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' value='1-2'/>
                        <img src={edit} className='h-[0.85rem] self-center'/>
                    </div>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6 mb-6">
                <label htmlFor="quill-editor" className="font-medium text-md">
                    Instructions and guidelines <span className="text-[red]">*</span>
                </label>
                <ReactQuill id='quill-editor' theme="snow" value={value} onChange={setValue} />
            </div>

        </div>
    </>
  )
}

export default ConfigurationForm

