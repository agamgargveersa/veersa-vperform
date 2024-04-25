import React from 'react'
import Datepicker from "react-tailwindcss-datepicker"; 
import { useState } from 'react';


const DateRangePicker = () => {
    const [value, setValue] = useState({ 
            startDate: new Date(), 
            endDate: new Date() 
        }); 
        
    const handleValueChange = (newValue:any) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 
  return (
    <>
        <Datepicker 
            value={value} 
            onChange={handleValueChange} 
            showShortcuts={true} 
        /> 
    </>
  )
}

export default DateRangePicker