import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
    return (
      <Router>
          <Navbar />
        <div className="container pt-4">
          <Routes>
          <Route path={'/'} exact element={<Home/>} />
          <Route path={'/about'} element={<About/>} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
