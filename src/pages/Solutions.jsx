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
    <SolutionBlock
        problemNumber="2117E"
        name="Lost Soul"
        link="https://codeforces.com/contest/2117/problem/E"
        solutionText={`
      <p>
        It's clear to see that if a match exists at position <InlineMath math="i" />, then we can repeatedly set <InlineMath math="a_j := b_{j+1}" /> and <InlineMath math="b_j := a_{j+1}" /> for all <InlineMath math="j" />, where <InlineMath math="j" /> starts as <InlineMath math="i-1" /> and goes backwards until the start of the array.
        This allows us to have at least <InlineMath math="i" /> matches (including the match at position <InlineMath math="i" />).
      </p>

      <p>
        Therefore, the optimal approach is to maximize the index <InlineMath math="i" /> where <InlineMath math="a_i = b_i" />. Suppose we can't remove any element.
        Then, for some <InlineMath math="a_i" />, we can set it to any <InlineMath math="b_j" /> such that <InlineMath math="j mod 2 ne i mod 2" /> and <InlineMath math="j > i" />, or set it to any <InlineMath math="a_j" /> such that <InlineMath math="j mod 2 = i mod 2" /> and <InlineMath math="j > i" />.
      </p>

      <p>
        However, if we wanted to set <InlineMath math="a_i" /> to some <InlineMath math="b_j" /> where <InlineMath math="j mod 2 = i mod 2" />, then we can just remove index <InlineMath math="i+1" /> from the array.
        By similar reasoning, we can set <InlineMath math="a_i" /> to any <InlineMath math="a_j" /> where <InlineMath math="j mod 2 ne i mod 2" /> and <InlineMath math="j > i+1" />.
      </p>

      <p>
        Notice that we removed index <InlineMath math="i+1" />, so we can't set <InlineMath math="a_i := a_{i+1}" />. Now, we know that we can set any <InlineMath math="a_i" /> to any <InlineMath math="a_j" /> or <InlineMath math="b_j" /> such that <InlineMath math="j > i+1" />.
        This can be generalized for <InlineMath math="b_i" /> as well.
      </p>

      <p>
        So the solution is that, for each position <InlineMath math="i" />, we want to check if any <InlineMath math="a_j" /> or <InlineMath math="b_j" />, such that <InlineMath math="j > i+1" />, matches <InlineMath math="a_i" /> or <InlineMath math="b_i" />, allowing us to get a match at position <InlineMath math="i" />.
        We also need to check if position <InlineMath math="i" /> already contains a match, or if <InlineMath math="a_i = a_{i+1}" /> or <InlineMath math="b_i = b_{i+1}" />.
      </p>`}
      />
      <SolutionBlock
        problemNumber="2117F"
        name="Wildflower"
        link="https://codeforces.com/contest/2117/problem/F"
        solutionText={`
      <p>
        We only need to consider two cases, the case of <InlineMath math="1" /> leaf and the case of <InlineMath math="2" /> leaves.
      </p>

      <p>
        <strong>1 leaf case:</strong> We can see that <InlineMath math="{1, 2}" /> are positive values, so <InlineMath math="s" /> is strictly increasing as you move towards the root.
        Therefore, any array <InlineMath math="a" /> will be valid. The answer for this case would be <InlineMath math="2n" />.
      </p>

      <p>
        <strong>2 leaves case:</strong> Let <InlineMath math="v" /> be the lowest common ancestor between leaf <InlineMath math="x" /> and leaf <InlineMath math="y" />.
        From <InlineMath math="v" /> going up towards the root, we can see that it follows the same idea as the 1-leaf case, which means that any vertex in the path between the root and <InlineMath math="v" /> can be assigned to either <InlineMath math="1" /> or <InlineMath math="2" />.
      </p>

      <p>
        Without loss of generality, suppose leaf <InlineMath math="x" /> has smaller depth than leaf <InlineMath math="y" />.
        Say we assigned <InlineMath math="a_x = 1" /> and <InlineMath math="a_y = 2" />; it is easy to see that we are forced to assign vertices to <InlineMath math="2" /> as we're going up, until we eventually finish assigning a branch.
        So the number of vertices that are free to be assigned to either <InlineMath math="1" /> or <InlineMath math="2" /> in <InlineMath math="y" />'s branch is simply <InlineMath math="depth_y - depth_x" />.
      </p>

      <p>
        If we assign <InlineMath math="a_x = 2" /> and <InlineMath math="a_y = 1" /> instead, then <InlineMath math="y" /> would have one more vertex forced to be assigned to <InlineMath math="2" />, meaning there are only <InlineMath math="depth_y - depth_x - 1" /> free vertices in <InlineMath math="y" />'s branch.
      </p>

      <p>
        Finally, the last case to be checked is if <InlineMath math="depth_x = depth_y" />.
        In this case, whether we assign <InlineMath math="x" /> to <InlineMath math="1" /> and <InlineMath math="y" /> to <InlineMath math="2" />, or we assign <InlineMath math="x" /> to <InlineMath math="2" /> and <InlineMath math="y" /> to <InlineMath math="1" />,
        all vertices in both branches are forced, so there are no free vertices in either branch.
      </p>

      <p>
        Let the number of leaves be <InlineMath math="cnt" />. Then we have that:
      </p>
        `}
      />
      
    </div>
  );
}

export default Solutions;