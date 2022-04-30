import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

  Router
} from "react-router-dom";
import Main from './Main';
import LoginPage from './LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
     
      <Route path="/main" element={<Main />} />
      <Route path="" element={<LoginPage />} />
      
      </Routes>
      </BrowserRouter>
     
      
    </>
  )
}

export default App