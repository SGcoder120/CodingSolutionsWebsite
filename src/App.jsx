import React from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Interactives from './pages/Interactives';
import './App.css'; // Assuming you have a CSS file for global styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="app" style={{ paddingTop: '40px' }}>
                {/* This padding is to ensure the content is not hidden behind the navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/interactives" element={<Interactives />} /> 
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;