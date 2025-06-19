import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import './Home.css'; // Assuming you have a CSS file for styling

function Solutions() {
  return (
    <div className="solutions">
      <h1>Solutions</h1>
      <p>Here are my solutions</p>
      <ul>
        <li>Solution 1</li>
        <li>Solution 2</li>
        <li>Solution 3</li>
      </ul>
    </div>
  );
}

export default Solutions;