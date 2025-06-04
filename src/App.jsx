import React from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ paddingTop: '40px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;