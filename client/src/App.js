import React from 'react';
import Home from './components/Basics/Home';
import Home1 from './components/Basics/Home1';
import SignIn from './components/Basics/SignIn';
import Upload from './components/Basics/Upload';
import GetStarted from './components/Basics/GetStarted';
import Profile1 from './components/Basics/Profile/Profile1';
import Profile2 from './components/Basics/Profile/Profile2';
import Profile3 from './components/Basics/Profile/Profile3';
import Profile4 from './components/Basics/Profile/Profile4';
import Profile5 from './components/Basics/Profile/Profile5';
import Profile6 from './components/Basics/Profile/Profile6';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="getstarted/signin" element={<SignIn />} />
                  <Route path="/home1" element={<Home1 />} />
                  <Route path="/home1" element={<Home1 />} />
                  <Route path="/home1/profile1" element={<Profile1 />} />
                  <Route path="/home1/profile2" element={<Profile2 />} />
                  <Route path="/home1/profile3" element={<Profile3 />} />
                  <Route path="/home1/profile4" element={<Profile4 />} />
                  <Route path="/home1/profile5" element={<Profile5 />} />
                  <Route path="/home1/profile6" element={<Profile6 />} />
                  <Route path="getstarted/customer" element={<Home1 />} />
                  <Route path="upload" element={<Upload />} />
                  <Route path="getstarted" element={<GetStarted />} />
                  <Route path="getstarted/customer/profile1" element={<Profile1 />} />
                  <Route path="getstarted/customer/profile2" element={<Profile2 />} />
                  <Route path="getstarted/customer/profile3" element={<Profile3 />} />
                  <Route path="getstarted/customer/profile4" element={<Profile4 />} />
                  <Route path="getstarted/customer/profile5" element={<Profile5 />} />
                  <Route path="getstarted/customer/profile6" element={<Profile6 />} />
                  </Route>
              </Routes>
        </BrowserRouter>
  );
}
export default App;