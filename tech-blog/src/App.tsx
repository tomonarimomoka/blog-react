import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./style.css"
import {Header} from './Parts';
import {Index} from './Index.tsx'
import {IndexEn} from './IndexEn.tsx'
import { ListTech } from "./ListTech.tsx";
import { PlivacyPolicy } from "./privacyPolicy.tsx";
import { AwsForBeginner } from "./artical/awsForBeginner.tsx";
import { AwsListOfServices } from "./artical/awsListOfServices.tsx";
import { ElementOfComputer } from "./artical/elementOfComputer.tsx";
import { FirstLTparty } from "./artical/firstLTparty.tsx";
import { GitForBeginner } from "./artical/gitForBeginner.tsx";
import { GitForTeam } from "./artical/gitForTeam.tsx";
import { GoogleColab } from "./artical/googleColab.tsx";
import { Hakkason_1 } from "./artical/hakkason_1.tsx";
import { Hakkason_2 } from "./artical/hakkason_2.tsx";
import { Hakkason_3 } from "./artical/hakkason_3.tsx";
import { HowToUseStreamlit } from "./artical/howToUseStreamlit.tsx";
import { HTTPmethod } from "./artical/HTTPmethod.tsx";
import { JavaSilver } from "./artical/JavaSilver.tsx";
import { JobHuntting } from "./artical/jobHuntting.tsx";
import { OracleBronzaDBA } from "./artical/oracleBronzaDBA.tsx";
import { Security } from "./artical/security.tsx";
import { SimpleTest } from "./artical/simpleTest.tsx";
import { TSkaigiReport } from "./artical/TSkaigiReport.tsx";
import { VimForBeginner } from "./artical/vimForBeginner.tsx";
import { WhatIsProtocol } from "./artical/whatIsProtocol.tsx";
import {HowToMigrateBlog} from "./artical/HowToMigrateBlog.tsx";
import {FirstCareerChange} from "./artical/FirstCareerChange.tsx";
import {FirstLinux} from "./artical/FirstLinux.tsx";
import {FirstPcChange} from "./artical/FirstPcChange.tsx";
import {HowToBootSurfaceByUSB} from "./artical/HowToBootSurfaceByUSB.tsx";
import {ListAll} from "./list/ListAll.tsx";
import {ListExperiences} from "./list/ListExperiences.tsx";
import {ListExplanation} from "./list/ListExplanation.tsx";
import {ListFistSeries} from "./list/ListFistSeries.tsx";
import ReactGA from 'react-ga4'

function App() {

  ReactGA.initialize('G-LG6VXEVGW8') 
  return (
    <>   
      <Header/>
      <main className="box">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/IndexEn' element={<IndexEn />} />
            <Route path='/ListTech' element={<ListTech />} />
            <Route path='/ListAll' element={<ListAll />} />
            <Route path='/ListExperiences' element={<ListExperiences />} />
            <Route path='/ListExplanation' element={<ListExplanation />} />
            <Route path='/ListFistSeries' element={<ListFistSeries />} />
            <Route path='/PlivacyPolicy' element={<PlivacyPolicy />} />
            <Route path='/AwsForBeginner' element={<AwsForBeginner />} />
            <Route path='/AwsListOfServices' element={<AwsListOfServices />} />
            <Route path='/ElementOfComputer' element={<ElementOfComputer />} />
            <Route path='/FirstLTparty' element={<FirstLTparty />} />
            <Route path='/GitForBeginner' element={<GitForBeginner />} />
            <Route path='/GitForTeam' element={<GitForTeam />} />
            <Route path='/GoogleColab' element={<GoogleColab />} />
            <Route path='/Hakkason_1' element={<Hakkason_1 />} />
            <Route path='/Hakkason_2' element={<Hakkason_2 />} />
            <Route path='/Hakkason_3' element={<Hakkason_3 />} />
            <Route path='/HowToUseStreamlit' element={<HowToUseStreamlit />} />
            <Route path='/HTTPmethod' element={<HTTPmethod />} />
            <Route path='/JavaSilver' element={<JavaSilver />} />
            <Route path='/JobHuntting' element={<JobHuntting />} />
            <Route path='/OracleBronzaDBA' element={<OracleBronzaDBA />} />
            <Route path='/Security' element={<Security />} />
            <Route path='/SimpleTest' element={<SimpleTest />} />
            <Route path='/TSkaigiReport' element={<TSkaigiReport />} />
            <Route path='/VimForBeginner' element={<VimForBeginner />} />
            <Route path='/WhatIsProtocol' element={<WhatIsProtocol />} />
            <Route path='/HowToMigrateBlog' element={<HowToMigrateBlog />} />
            <Route path='/FirstCareerChange' element={<FirstCareerChange />} />
            <Route path='/FirstLinux' element={<FirstLinux />} />
            <Route path='/FirstPcChange' element={<FirstPcChange />} />
            <Route path='/HowToBootSurfaceByUSB' element={<HowToBootSurfaceByUSB />} />
          </Routes>
        </BrowserRouter>  
      </main>
    </>
  )
}

export default App
