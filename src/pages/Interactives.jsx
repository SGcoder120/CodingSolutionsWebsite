import React from 'react';
import './Interactives.css'; // Assuming you have a CSS file for styling
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import JSXParser from 'react-jsx-parser';

function Interactives() {
  return (
    <div className="interactives">
      <h1>Interactives</h1>
      <p>This is the Interactives page.</p>
      <p>First idea is dfs/bfs lookin ahh</p>
    </div>
  );
}

export default Interactives;