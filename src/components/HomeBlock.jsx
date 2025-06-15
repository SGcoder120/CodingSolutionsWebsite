import React from 'react';
import '../images/oldbooks.png'; // Assuming this is the correct path to your image
import './HomeBlock.css'; // Assuming you have a CSS file for styling

function HomeBlock() {
  return (
    <div className="home-block">
      <img
        src={require('../images/old-books-free-photo.webp')}
        alt={'Home'}
        className="home-image"
      />
      <div className="home-text">HOME</div>
    </div>
  );
}

export default HomeBlock;