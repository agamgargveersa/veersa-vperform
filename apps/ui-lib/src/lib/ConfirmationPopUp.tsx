import React from 'react';

// import {confirm} from '../assets/images/index'

const ConfirmationPopUp = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-3">
        <header className=" text-white px-2 py-2  bg-blue-500 rounded flex items-center mb-2">
             {/* <img className='mx-2'src={confirm}alt=""/>  */}
          <h2 className="text-lg font-bold">Confirmation</h2>
          {/* <img className='ml-56'src={cross} alt=""/> */}
                </header>
        <div className='flex justify-start items-center mt-6'>
        {/* <img className='mr-2'  src={remove} alt=""/> */}
        <p className="text-gray-700 mb-3">
          Are you sure you want to delete the configuration?
        </p>
        </div>
        <footer className="flex justify-end">
          <button className=" border-black text-blue-500 font-bold  py-2 px-4 rounded mr-2">
            No
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Yes
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;