import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
