import { confirmIcon, cross, deleteIcon } from 'apps/vperform-react/src/assets/images';
import React from 'react';

// import {confirm} from '../assets/images/index'
interface Props{
  showPopup:boolean,
  setShowPopup:Function
}
const ConfirmationPopUp = ({showPopup,setShowPopup}:Props) => {
  return (
    showPopup && (<div className="fixed inset-0 flex left-0 right-0 items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-3">
        <header className=" text-white px-2 py-2  bg-blue-500 rounded flex items-center mb-2">
             <img className='mx-2'src={confirmIcon} alt=""/> 
          <h2 className="text-lg font-bold">Confirmation</h2>
          <img onClick={()=>setShowPopup(false)} className='ml-56' src={cross} alt=""/>
        </header>
        
        <div className='flex flex-row items-center py-8 px-4 gap-1 border-[1px] border-gray-300 justify-center'>
          <div className='rounded-full bg-red-50 p-2'><img src={deleteIcon} /></div>
          <p className="text-gray-700 ">
            Are you sure you want to delete the configuration?
          </p>
        </div>

        <footer className="flex flex-row items-center justify-end p-1">
          <button className=" border-black text-blue-500 font-bold  py-2 px-4 rounded mr-2">
            No
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Yes
          </button>
        </footer>
      </div>
    </div>)
  );
};

export default ConfirmationPopUp;