import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
// import "./style.css"
import {HeaderNav } from './Parts';
import {Index} from './Index.tsx'
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
import {HowToMigrateBlog} from "./artical/HowToMigrateBlog.tsx"
import {FirstCareerChange} from "./artical/FirstCareerChange.tsx"
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
      <Helmet>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LG6VXEVGW8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LG6VXEVGW8');
            `,
          }}
        />
        {/* <!-- Google AdSense --> */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761899560206236" crossOrigin="anonymous"></script>
      </Helmet>

      <HeaderNav />
      <main className="box">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/ListTech' element={<ListTech />} />
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
          </Routes>
        </BrowserRouter>  
      </main>
    </>
  )
}

export default App
