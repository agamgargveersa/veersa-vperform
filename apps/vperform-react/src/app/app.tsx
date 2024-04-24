import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {logoVeersa,appraisalCycle,appraiseeView,home,showNav,settings,performance,collapse,logout,fullVeersaLogo} from '../assets/images/index'
import Navbar from './Navbar';

import {PageHeader} from '../../../ui-lib/src/lib/index'
import ManageAppraiseeList from './AppraisalCycle/ManageAppraiseeTable';
import AppraisalCycle from './AppraisalCycle/AppraisalCycle';
import { useState } from 'react';
import Home from './Dashboard/Home';
import AppraiseeView from './AppraiseeView/AppraiseeView';
import PerformanceModule from './PerformanceModule/PerformanceModule';
import Settings from './Settings/Settings';
export function App() {

  const [selectedOption,setSelectedOption] = useState<String>("")
  return (
    <div>

      
      <BrowserRouter>
        <Navbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='appraisalcycle' element={<AppraisalCycle setSelectedOption={setSelectedOption} />}/>
          {/* render conditionally with appraisal cycle table */}
          <Route path='manageappraiseelist' 
            element = {<div className='ml-[84px] p-1'>
              <PageHeader title={"Appraisal Cycle"} icon={appraisalCycle} />
              <ManageAppraiseeList /></div>} 
          />
          <Route path='appraiseeview' element={<AppraiseeView/>} />
          <Route path='performanceModule' element={<PerformanceModule />} />
          <Route path='settings' element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
