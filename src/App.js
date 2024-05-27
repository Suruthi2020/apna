import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Jobs from './Jobs';
import Workfromhome from './Workfromhome';
import Parttimejobs from './Parttimejobs';

function App() {
  return (
   <>
   <BrowserRouter>
   <Home/>

   <Routes>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/jobs/work_from_home_jobs' element={<Workfromhome/>}/>
    <Route path='/jobs/partTime_jobs' element={<Parttimejobs/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App