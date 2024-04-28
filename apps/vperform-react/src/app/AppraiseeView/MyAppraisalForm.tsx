import React from 'react'
import { useState } from 'react';

const MyAppraisalForm = () => {
    const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      }
      const handleDraft = () => {
        console.log('Draft clicked');
      };
    
      const handleSubmit = () => {
        console.log('Submitted');
      }
  return (


    <>
     <div className="bg-white p-4 rounded-md shadow-md m-4">
      <h1 className='text-blue-800 px-2 '>Past Engagement in 6 months </h1>
    <div className='px-2 py-2'>
            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-gray-700 dark:border-gray-600 " placeholder="John" required />
            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-gray-700 dark:border-gray-600 " placeholder="John" required />
            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-gray-700 dark:border-gray-600 " placeholder="John" required />
        </div>
        {/* <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-gray-700 dark:border-gray-600 " placeholder="John" required />
        </div> */}
        {/* <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-gray-700 dark:border-gray-600 " placeholder="John" required />
        </div> */}
          </div>
          <div className="bg-white p-4 rounded-md shadow-md m-4">
          <h1 className='text-blue-800 px-2 py-2 '>Result Orientation </h1>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
          <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <label htmlFor="self_rating" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Self Rating</label>
            <input type="text" id="self_rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  " placeholder="5" required />
            
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Comments</label>
<textarea id="message"  className="flex  block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Manager's Feedback</label>
<textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
    </div>




    <div className="bg-white p-4 rounded-md shadow-md m-4">
          <h1 className='text-blue-800 px-2 py-2 '>Contribution & Commitment to Veersa </h1>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
          <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <label htmlFor="self_rating" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Self Rating</label>
            <input type="text" id="self_rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  " placeholder="5" required />
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Comments</label>
<textarea id="message"  className="flex  block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Manager's Feedback</label>
<textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
    </div>


    
    <div className="bg-white p-4 rounded-md shadow-md m-4">
          <h1 className='text-blue-800 px-2 py-2 '>Self Development and Learning</h1>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
          <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <label htmlFor="self_rating" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Self Rating</label>
            <input type="text" id="self_rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  " placeholder="5" required />
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Comments</label>
<textarea id="message"  className="flex  block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Manager's Feedback</label>
<textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
    </div>


    <div className="bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-end items-center ">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2 "
          onClick={handleDraft}
        >
          Save as Draft
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </div>
       
</>
  );
}; 
  

export default MyAppraisalForm
