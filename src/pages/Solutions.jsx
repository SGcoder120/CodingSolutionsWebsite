import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import './Solutions.css'; // Assuming you have a CSS file for styling
import SolutionBlock from '../components/SolutionBlock';

function Solutions() {
  return (
    <div className="solutions">
      <h1>Solutions</h1>
      <p>All of these are taken from the editorial from these respective problems.</p>
      <h2>Codeforces Round 1026 (Div. 2)</h2>
      <SolutionBlock
        problemNumber={"2110B"}
        name={"Down with Brackets "}
        link={"https://codeforces.com/contest/2110/problem/B"}
        solutionText={
        `<div>
          
          <p>Let's recall the algorithm for checking the correctness of a bracket sequence. To do this, we check that the balance <InlineMath math="bal" />
          at each prefix is non-negative, and that the balance <InlineMath math="bal" />
          of the entire sequence is equal to 0.</p>

          <p>To break a correct bracket sequence, we need to violate at least one of the conditions. Note that the balance <InlineMath math="bal" />
          of the entire sequence will not change when we remove one opening bracket and one closing bracket. Therefore, we need to violate the first condition.</p>

          <p>Notice that removing an opening bracket will decrease <InlineMath math="bal" />
          by 1 in the suffix to the right of the bracket. Similarly, for a closing bracket, it will increase <InlineMath math="bal" />
          by 1 in the suffix.</p>
          
          <p>It is clear that the answer is actually the result of checking the original bracket sequence without the first and last brackets for correctness. If it is correct, then the sequence cannot be broken; otherwise, it can be broken.</p>
          <p>For example, for the sequence <InlineMath math="(()())" />, it is correct even after the first and last parenthesis is removed, so it cannot be broken. For the sequence <InlineMath math="((()))(())" />, it is incorrect after the first and last parenthesis is removed, so it can be broken.</p>
        </div>`
        }
      />
      <SolutionBlock
        problemNumber={"2110C"}
        name={"Racing "}
        link={"https://codeforces.com/contest/2110/problem/C"}
        solutionText={`<p>
        Let's maintain the bounds <InlineMath math="L, R" /> — the segment of heights in which <InlineMath math="h_i" /> can currently be. Initially, <InlineMath math="L = R = 0" />.
        </p>

        <p>
        Now, we will iterate from <InlineMath math="i = 1" /> to <InlineMath math="n" />. We could have risen by 1, so <InlineMath math="R" /> increases by 1. We also cannot rise above <InlineMath math="r_i" /> or drop below <InlineMath math="l_i" />, so:
        </p>

        <p>
        If <InlineMath math="R > r_i" />, then <InlineMath math="R = r_i" />.<br />
        If <InlineMath math="L < l_i" />, then <InlineMath math="L = l_i" />.
        </p>

        <p>
        If at any point <InlineMath math="L > R" />, then such an array <InlineMath math="d" /> does not exist. Otherwise, it can be restored in reverse.
        </p>

        <p>
        The final asymptotic complexity is <InlineMath math="O(n)" />.
        </p>`}

      />
      <SolutionBlock
        problemNumber="2110D"
        name="Fewer Batteries"
        link="https://codeforces.com/contest/2110/problem/D"
        solutionText={`<p>
      We will build a directed graph where the vertices represent points and the edges represent passages.
      </p>

      <p>
      We will then perform a binary search on the answer. Suppose we are currently checking whether the answer is less than or equal to <InlineMath math="\\text{mid}" />. To do this, we use dynamic programming. Let <InlineMath math="dp[v]" /> represent the maximum number of batteries the robot can have when it is at vertex <InlineMath math="v" />. Initially, <InlineMath math="dp[1] = 0" /> and for all <InlineMath math="i > 1" />, <InlineMath math="dp[i] = -\\infty" />.
      </p>

      <p>
      We calculate the values of <InlineMath math="dp" /> in a forward manner. For each vertex <InlineMath math="v" />, we first add <InlineMath math="b[v]" /> to <InlineMath math="dp[v]" /> since the robot can collect batteries at that vertex. Then we set <InlineMath math="dp[v] = \\min(dp[v], \\text{mid})" />, because the robot cannot carry more than <InlineMath math="\\text{mid}" /> batteries.
      </p>

      <p>
      Next, for each outgoing edge from <InlineMath math="v" /> to <InlineMath math="u" /> with weight <InlineMath math="w" />, we check if <InlineMath math="dp[v] &lt; w" />. If it is, the robot cannot traverse that edge. Otherwise, we update <InlineMath math="dp[u] = \\max(dp[u], dp[v])" />.
      </p>

      <p>
      If, at the end of this process, <InlineMath math="dp[n] &gt; 0" />, then it is possible to reach the destination with <InlineMath math="\\text{mid}" /> or fewer batteries, so the answer is less than or equal to <InlineMath math="\\text{mid}" />. Otherwise, it is not.
      </p>

      <p>
      The final time complexity of this algorithm is <InlineMath math="O((n + m) \\cdot \\log W)" />, where <InlineMath math="W" /> is the range over which we are performing binary search.
      </p>`}
      />

      <h2>Codeforces Round 1027 (Div. 3)</h2>
      <SolutionBlock
        problemNumber="2114D"
        name="Come a Little Closer"
        link="https://codeforces.com/contest/2114/problem/D"
        solutionText={`<p>
      The minimum rectangle required to enclose the monsters has lengths calculated as:
      <InlineMath math="\\max(x_i) - \\min(x_i) + 1" /> and <InlineMath math="\\max(y_i) - \\min(y_i) + 1" />. So, only the maximum and minimum values along each axis are necessary.
      </p>

      <p>
      To analyze whether a monster can be removed, we examine the minimal rectangle needed to enclose the <InlineMath math="n - 1" /> other monsters.
      </p>

      <p>
      For each axis (x and y), we store the two smallest and two largest values. This way, when excluding a monster, we can still calculate the min/max among the remaining ones.
      </p>

      <p>
      Now that we can compute the rectangle for all monsters except one, we simply check whether the excluded monster can still fit within that rectangle.
      </p>

      <p>
      If the area of this rectangle is exactly <InlineMath math="n - 1" />, then all the positions are filled, and we must increase at least one side to fit the monster. Otherwise, the monster can be placed inside it without resizing.
      </p>`}
      />

      <SolutionBlock
        problemNumber="2114E"
        name="Kirei Attacks the Estate"
        link="https://codeforces.com/contest/2114/problem/E"
        solutionText={`<p>
      Let's consider each vertex separately. The sign with which its danger contributes to the alternating sum depends on the parity of its index on the path.
      </p>

      <p>
      To compute <InlineMath math="f(v)" />, the maximum possible value of threat at vertex <InlineMath math="v" />, we consider two choices:
      either stay at <InlineMath math="v" /> with value <InlineMath math="a_v" />, or subtract the minimum value of the threat of its parent:
      </p>

      <p>
      <InlineMath math="f(v) = \\max(a_v, a_v - g(p_v))" />
      </p>

      <p>
      Similarly, for <InlineMath math="g(v)" /> — the minimum value of the threat passed down to children:
      </p>

      <p>
      <InlineMath math="g(v) = \\min(a_v, a_v - f(p_v))" />
      </p>

      <p>
      It is important to handle the root of the tree separately. For the root vertex 1:
      <InlineMath math="f(1) = g(1) = a_1" />
      </p>

      <p>
      These values <InlineMath math="f(v)" /> and <InlineMath math="g(v)" /> can be computed trivially using a depth-first traversal of the tree. The final array of <InlineMath math="f(v)" /> values forms the answer to the problem.
      </p>`}
      />
    <h2>Codeforces Round 1029 (Div. 3)</h2>

    </div>
  );
}

export default Solutions;