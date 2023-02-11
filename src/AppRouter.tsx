import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index, Articles, NotFound, Portfolio, Wanted, About } from './pages';
import { Header, Navbar } from './components';
import './index.scss';

function AppRouter() {
  return (
    <Router>
      <div className='root'>
        <div className='web-layout'>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route index element={<Index />} />
              <Route path='articles' element={<Articles />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='wanted' element={<Wanted />} />
              <Route path='about' element={<About />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
