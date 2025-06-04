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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;