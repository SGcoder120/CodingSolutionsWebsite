import React from 'react';
import '../images/oldbooks.png'; // Assuming this is the correct path to your image
import './HomeBlock.css'; // Assuming you have a CSS file for styling
import '../images/old-books-free-photo.webp'; // Assuming this is the correct path to your image
import '../images/tech_bg.jpg';
import '../images/tech_bg2.jpg';
import '../images/tech_bg3.jpg';


function HomeBlock() {
  return (
    <div className="home-block">
      <img
        src={require('../images/tech_bg3.jpg')}
        alt={'Home'}
        className="home-image"
      />
      <div className="home-text">HOME</div>
    </div>
  );
}

export default HomeBlock;