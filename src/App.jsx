import React, { lazy, Suspense } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';

// Lazy-loaded components
const Pages = lazy(() => import('./pages/Pages'));
const LikedProduct = lazy(() => import('./pages/LikekProduct'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/rj-deco/favoris" element={<LikedProduct />} />
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
