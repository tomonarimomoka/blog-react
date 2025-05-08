import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import {Index} from './Index.tsx'
import { ListTech } from "./ListTech.tsx";
import { PlivacyPolicy } from "./privacyPolicy.tsx";
import { AwsForBeginner } from "./artical/awsForBeginner.tsx";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/ListTech' element={<ListTech />} />
        <Route path='/PlivacyPolicy' element={<PlivacyPolicy />} />
        <Route path='/AwsForBeginner' element={<AwsForBeginner />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
