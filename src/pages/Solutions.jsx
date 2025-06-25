import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import './Solutions.css'; // Assuming you have a CSS file for styling
import SolutionBlock from '../components/SolutionBlock';

function Solutions() {
  return (
    <div className="solutions">
      <h1>Solutions</h1>
      <h2>Codeforces Round 1026 (Div. 2)</h2>
      <SolutionBlock
      problemNumber={"2110B"}
      name={"Down with Brackets "}
      link={"https://codeforces.com/contest/2110/problem/B"}
      solutionText={
          `<div>
            <p>This is some sample math:</p>
            <InlineMath math="\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}" />
          </div>`
      } />
    </div>
  );
}

export default Solutions;