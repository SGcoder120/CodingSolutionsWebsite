import React from 'react';
import YoutubeBlock from '../components/YoutubeBlock'; // Adjust the import path as necessary

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple React application.</p>
            <YoutubeBlock />
        </div>
    );
}

export default Home;