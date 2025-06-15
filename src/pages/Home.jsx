import React from 'react';
import YoutubeBlock from '../components/YoutubeBlock';
import HomeBlock from '../components/HomeBlock';

function Home() {
    return (
        <div className="home">
            <HomeBlock title={"Home"} imageUrl={'./old-books-free-photo.jpg'}/>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple React application.</p>
            <p>Click on the buttons below to watch YouTube videos.</p>
            <p>Use the navigation bar to explore different sections.</p>
            <YoutubeBlock />
        </div>
    );
}

export default Home;