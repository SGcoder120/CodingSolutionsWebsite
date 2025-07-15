import React from 'react';
import './Interactives.css'; // Assuming you have a CSS file for styling
import 'katex/dist/katex.min.css';
import GraphCanvas from '../components/GraphCanvas'; // Assuming you have a GraphCanvas component

function Interactives() {
  return (
    <div className="interactives">
      <h1>Interactives</h1>
      <p>This is some cool stuff to show in the Interactives page.</p>
      <p>Here is a cool graph: </p>
      <div className="graph-container">
        <GraphCanvas />
      </div>
    </div>
  );
}

export default Interactives;