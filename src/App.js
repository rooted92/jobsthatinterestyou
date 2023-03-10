// Pedro Castaneda
// 03-03-2023
// Assignment: Jobs That Interest You
// REMEMBER - when you pull code from github on to your repo and open it in VS Code, be sure you are in root folder then enter
// command: npm install. After the installation run: npm start.
// Peer Review by - Daniel Decoito: Pedro's project was done really well and meets all the requirements. While his design was simple, it still worked  well  as everything was legible and had a good use of color.  His file structure was set up really well and looking over his code everything was concise and clear. The thing that sets this project apart from other projects is the depth in which Pedro went into each one of the jobs. You can tell he really researched every position.

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SFMOMAComponent from './components/SFMOMA/SFMOMAComponent';
import OxLabsComponent from './components/OxLabs/OxLabsComponent';
import BraveComponent from './components/Brave/BraveComponent';
import CastleHillComponent from './components/CastleHillGaming/CastleHillComponent';
import IBMComponent from './components/IBM/IBMComponent';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SFMOMAComponent />} />
          <Route path='/OxLabs' element={<OxLabsComponent />} />
          <Route path='/Brave' element={<BraveComponent />} />
          <Route path='/CastleHill' element={<CastleHillComponent/>} />
          <Route path='/IBM' element={<IBMComponent />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

 {/* 
        San Francisco Museum of Modern Art Juniro Web Developer
        https://www.glassdoor.com/Job/santa-rosa-junior-software-developer-jobs-SRCH_IL.0,10_IC1147518_KO11,36.htm?clickSource=searchBox
        
        Castle Hill Gaming Junior Software Developer
        https://www.glassdoor.com/Job/santa-rosa-junior-software-developer-jobs-SRCH_IL.0,10_IC1147518_KO11,36.htm?clickSource=searchBox
        We offer a competitive salary, excellent benefits including company-paid health insurance, company contributions to HSA/HRA accounts, generous paid time off, and more.

        EandM Web Developer
        https://www.monster.com/jobs/search?q=Junior+Software+Developer&where=Santa+Rosa%2C+CA&page=3&so=p.s.sh
        You will grow professionally through our extensive training program and the experience you will gain. We also have excellent benefits and pay.
        Compensation: $75,000-$85,000/DOE

        Company benefits include:
        
        Medical
        Dental
        Vision
        Four Weeks of PTO
        10 Paid Holidays
        401(k) matching program
        Short & Long Term Disability

        IBM Frontend Developer
        https://www.linkedin.com/jobs/search/?currentJobId=3499759114&geoId=102095887&keywords=junior%20web%20developer&location=California%2C%20United%20States&refresh=true
        Internship opportunity
    */}