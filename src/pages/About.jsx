import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-me">
        <p>
          Hi, I'm Shivesh! I'm a collge school student who likes competitive programming. 
          I created this website to share my solutions based on what problems I couldn't quite solve in contest.
        </p>
        <p>After running though a lot of ideas for a website, I went through with this one since ...</p>
        <p> The font I sued is Outfit from Google Fonts, which can be found here: <a className="href-link" href="https://fonts.google.com/specimen/Outfit?lang=en_Latn" target="blank">The Outfit Font</a></p>
        <p>Here are some tools and modules I used to make this website:</p>
        <ul>
          <li>React JSX</li>
          <li>React Router</li>
          <li>React KaTeX - basically LaTeX for React</li>
          <li>React JSX Parser</li>
          <li>React Icons</li>
        </ul>
        <p>If you are curious, here is the github repository: <a className="href-link" href="https://github.com/SGcoder120/CodingSolutionsWebsite" target="blank">Coding Solutions Website Github</a></p>
      </div>
    </div>
  );
}

export default About;