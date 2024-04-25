import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {logoVeersa,appraisalCycle,appraiseeView,home,showNav,settings,performance,collapse,logout,fullVeersaLogo} from '../assets/images/index'
import Navbar from './Navbar';

import {PageHeader} from '../../../ui-lib/src/lib/index'
import ManageAppraiseeList from './AppraisalCycle/ManageAppraiseeTable';
import AppraisalCycle from './AppraisalCycle/AppraisalCycle';
import { useState } from 'react';
import NxWelcome from './nx-welcome';
import InputField from '../../../ui-lib/src/lib/InputField'
import DateRangePicker from '../../../ui-lib/src/lib/DateRangePicker'
import ConfigurationForm from './ConfigurationForm';

import Home from './Dashboard/Home';
import AppraiseeView from './AppraiseeView/AppraiseeView';
import PerformanceModule from './PerformanceModule/PerformanceModule';
import Settings from './Settings/Settings';
export function App() {

  const [selectedOption,setSelectedOption] = useState<String>("")
  return (
    <div className='p-1'>

      
      <BrowserRouter>
        <Navbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='appraisalcycle' element={<AppraisalCycle setSelectedOption={setSelectedOption} />}/>
          <Route path='appraiseeview' element={<AppraiseeView/>} />
          <Route path='performanceModule' element={<PerformanceModule />} />
          <Route path='settings' element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
