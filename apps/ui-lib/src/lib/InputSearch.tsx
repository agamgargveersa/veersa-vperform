// import React, { useState } from 'react';

// interface Props{
//     required:boolean,
//     title:String,
//     placeHolder:String
// }

// const InputBox = ({required,title,placeHolder}:Props) => {
//   const [inputValue, setInputValue] = useState('');
//   const [focused, setFocused] = useState(false);

//   const handleInputChange = (e:any) => {
//     setInputValue(e.target.value);
//   };

//   const handleInputFocus = () => {
//     setFocused(true);
//   };

//   const handleInputBlur = () => {
//     if (inputValue === '') {
//       setFocused(false);
//     }
//   };

//   return (
//     <div className="relative mt-4 w-60">
//       <input
//         type="text"
//         className="border-[1px] border-gray-500 placeholder:pb-[1px] focus:border-blue-500 outline-none px-2 pt-2 pb-1 w-full"
//         value={inputValue}
//         onChange={handleInputChange}
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         placeholder={placeHolder as string}
//       />
//       <label
//         className='absolute bg-white transition-all duration-300 text-sm text-black bottom-8
//         left-2 flex flex-row items-start'
//       >
//         <div className='px-1'>{title}</div> {required&&<div className='text-red-500'>*</div>}
//       </label>
//     </div>
//   );
// };

// export default InputBox;

import { searchIcon } from 'apps/vperform-react/src/assets/images';
import React from 'react';

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="search"
        className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-theme-blue"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
        <img src={searchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
