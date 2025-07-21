import React from 'react';
import './SolutionBlock.css';
import JSXParser from 'react-jsx-parser';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

function SolutionBlock({ problemNumber, name, link, solutionText }) {
  return (
    <div className="solution-block">
      <h3 className="solution-heading">{problemNumber} - {name}</h3>
      <a href={link} className="solution-link" target="blank" rel="noreferrer">
        {link}
      </a>
      <div className="solution-content">
        <JSXParser
          jsx={solutionText}
          components={{ BlockMath, InlineMath }}
        />
        
        {name === "Wildflower" && (
          <BlockMath math={`
          \\text{Answer} =
          \\begin{cases}
            0 & \\text{if } cnt > 2 \\\\
            2n & \\text{if } cnt = 1 \\\\
            (2^{depth_y - depth_x} + 2^{depth_y - depth_x - 1}) \\cdot 2^{depth_v} & \\text{if } cnt = 2 \\text{ and } depth_x < depth_y \\\\
            2^{depth_v} & \\text{if } cnt = 2 \\text{ and } depth_x = depth_y
          \\end{cases}
          `} />
        )}
      </div>
    </div>
  );
}

export default SolutionBlock;
