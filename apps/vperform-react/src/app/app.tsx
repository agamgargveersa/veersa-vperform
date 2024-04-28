import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {logoVeersa,appraisalCycle,appraiseeView,home,showNav,settings,performance,collapse,logout,fullVeersaLogo} from '../assets/images'
import Navbar from './sideNavbar/Navbar';
import {ConfirmationPopUp,PageTemplate} from '../../../ui-lib/src/lib/index'
import {PageHeader} from '../../../ui-lib/src/lib/index'
import ManageAppraiseeList from './components/manageApraisee/ManageAppraiseeTable';
import AppraisalCycle from './components/appraisalCycle/AppraisalCycle';
import { useState } from 'react';
export function App() {

  const [selectedOption,setSelectedOption] = useState<String>("")
  return (
    <div>

      
      <BrowserRouter>
        <Navbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <Routes>
          <Route path='/' element={<div className='ml-[84px] p-1 h-60'><PageHeader title={"Dashboard"} icon={home} /></div>} />
          <Route path='/appraisalcycle' element={<div className='ml-[84px] p-1 '><PageHeader title={"Appraisal Cycle"} icon={appraisalCycle} /><AppraisalCycle  setSelectedOption={setSelectedOption}/></div>} />
          <Route path='/appraiseeview' element={<div className='ml-[84px] p-1'><PageHeader title={"Appraisee View"} icon={appraiseeView} /><ManageAppraiseeList/></div>} />
          <Route path='/performanceModule' element={<div className='ml-[84px] p-1'><PageHeader title={"Performance Module"} icon={performance} /></div>} />
          <Route path='/settings' element={<div className='ml-[84px] p-1'><PageHeader title={"Settings"} icon={settings} /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
