import React from 'react';
import './App.css'

import MainLayout from './layouts/MainLayouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pages from './pages/Pages';


function App() {
  return (
    <>
    <MainLayout>
    <Router>
    <Routes>
      <Route path="/" element={<Pages/> }/>
      </Routes>
      </Router>
    </MainLayout>
   
    </>
  );
}

export default App;
