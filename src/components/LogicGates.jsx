import React, { useRef, useEffect, useCallback, useState } from 'react';
import './LogicGates.css'; // Assuming you have a CSS file for styling

function LogicGates() {
    return (
        <div className="logic-gates">
            <h2>Logic Gates</h2>
            <p>Logic gates are the building blocks of digital circuits. They perform basic logical functions that are fundamental to digital circuits.</p>
            <ul>
                <li><strong>AND Gate:</strong> Outputs true only if both inputs are true.</li>
                <li><strong>OR Gate:</strong> Outputs true if at least one input is true.</li>
                <li><strong>NOT Gate:</strong> Outputs the opposite of the input.</li>
                <li><strong>NAND Gate:</strong> Outputs false only if both inputs are true (NOT AND).</li>
                <li><strong>XOR Gate:</strong> Outputs true if inputs are different.</li>
            </ul>
        </div>
    );
}

export default LogicGates;