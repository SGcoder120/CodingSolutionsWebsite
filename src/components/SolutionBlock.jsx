import React from 'react';
import './SolutionBlock.css';
import JSXParser from 'react-jsx-parser';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

function SolutionBlock({ problemNumber, name, link, solutionText }) {
  return (
    <div className="solution-block">
      <h3 className="solution-heading">{problemNumber} - {name}</h3>
      <a href={link} className="solution-link" target="_blank" rel="noreferrer">
        {link}
      </a>
      <div className="solution-content">
        <JSXParser
          jsx={solutionText}
          components={{ BlockMath, InlineMath }}
        />
      </div>
    </div>
  );
}

export default SolutionBlock;
