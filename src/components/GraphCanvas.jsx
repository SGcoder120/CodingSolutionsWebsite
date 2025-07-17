import React, { useState, useRef, useEffect, useCallback } from 'react';
import './GraphCanvas.css'; // Assuming you have a CSS file for styling

function GraphCanvas() {
    const canvasRef = useRef(null);
    const [xVal, setXVal] = useState(0.5);

    function f(x) {
        return Math.sin(x); // Example function: y = sin(x)
    }

    function f2(x) {
        return x;
    }

    // Function to draw the graph
    const draw = useCallback((ctx, width, height, scale) => {
        const originX = width / 2;
        const originY = height / 2;

        // Clear the canvas
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();

        // Draw the grid lines
        ctx.strokeStyle = '#444';
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += scale) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = 0; y < height; y += scale) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw the axes
        ctx.strokeStyle = '#3330ecff';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, originY);
        ctx.lineTo(width, originY); // X-axis
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, height); // Y-axis
        ctx.stroke();

        // Draw the function
        ctx.strokeStyle = '#ea1c1cff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let px = -width / 2; px < width / 2; px++) {
            const x = px / scale;
            const y = f(x); // Example function: y = sin(x)
            const screenX = originX + x * scale;
            const screenY = originY - y * scale;
            if (px === -width / 2) {
                ctx.moveTo(screenX, screenY);
            } else {
                ctx.lineTo(screenX, screenY);
            }
        }
        ctx.stroke();

        // Draw another function for comparison
        ctx.strokeStyle = '#00831cff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let px = -width / 2; px < width / 2; px++) {
            const x = px / scale;
            const y2 = f2(x); // Example function: y = x
            const screenX = originX + x * scale;
            const screenY2 = originY - y2 * scale;
            if (px === -width / 2) {
                ctx.moveTo(screenX, screenY2);
            } else {
                ctx.lineTo(screenX, screenY2);
            }
        }
        ctx.stroke();

        // Draw the point for xVal
        ctx.fillStyle = '#ea1c1cff';
        const yVal = f(xVal); // Example function: y = sin(xVal)
        const pointX = originX + xVal * scale;
        const pointY = originY - yVal * scale;

        
        ctx.beginPath();
        ctx.arc(pointX, pointY, 6, 0, Math.PI * 2); // The point on the graph
        ctx.fill();

        // Draw the second point for the second function
        const yVal2 = f2(xVal); // Example function: y = xVal
        const pointX2 = originX + xVal * scale;
        const pointY2 = originY - yVal2 * scale;
        
        ctx.fillStyle = '#00831cff'; // Different color for the second point
        ctx.beginPath();
        ctx.arc(pointX2, pointY2, 6, 0, Math.PI * 2); // The point on the second graph
        ctx.fill();
    }, [xVal]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = 520;
        const height = canvas.height = 520;
        const scale = 20; // Scale for the graph

        draw(ctx, width, height, scale);
    }, [xVal, draw]); 

    return (
        <div className="graph-block">
            <canvas
                ref={canvasRef}
                style={{ border: '1px solid #ccc', marginBottom: '20px' }}
            />
            <input
                type={'range'}
                min={-15}
                max={15}
                step={0.01}
                value={xVal}
                onChange={(e) => setXVal(parseFloat(e.target.value))}
                style={{ width: '80%' }}
            />
            <div className="xy-vals">
                <div><strong>x = {xVal.toFixed(3)}</strong></div>
                <div><strong>f(x) = {(f(xVal)).toFixed(3)}</strong></div>
                <div><strong>f2(x) = {(f2(xVal)).toFixed(3)}</strong></div>
            </div>
        </div>
    );

}

export default GraphCanvas;
