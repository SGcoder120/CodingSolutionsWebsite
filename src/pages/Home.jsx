import React from 'react';
import YoutubeBlock from '../components/YoutubeBlock';
import HomeBlock from '../components/HomeBlock';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import './Home.css'; // Assuming you have a CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <div className="home">
                <HomeBlock />
                <h1 className="home-heading-1">Welcome to my Home Page</h1>
                <p>Hello! I am Shivesh Gupta and this is my personal website. In this website, I post my coding solutions from Codeforces contests over here on this website. I am still aspiring to work on competitive coding in the foreseeable future.</p>
                <p>Feel free to explore the content and learn more about my coding journey!</p>
                <p>
                    Here is a sample equation:
                    <BlockMath math="\int_0^\infty e^{-x} \, dx = 1" />
                    Here is an inline equation: <InlineMath math="\sqrt{a^2 + b^2} = c" />
                </p>
                
                
            </div>
            <div className="youtube-block">
                    <YoutubeBlock />
            </div>
        </div>
    );
}

export default Home;