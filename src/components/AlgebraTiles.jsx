import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import './AlgebraTiles.css';

const TILE_TYPES = {
  x2: { label: 'x²', color: 'x2', width: 80, height: 80 },
  x: { label: 'x', color: 'x', width: 40, height: 80 },
  one: { label: '1', color: 'one', width: 40, height: 40 },
};

const Tile = ({ id, type, x, y, onDragEnd }) => {
  const { label, color, width, height } = TILE_TYPES[type];

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={(event, info) => onDragEnd(id, info.point)}
      className={`tile ${color}`}
      style={{ width: `${width}px`, height: `${height}px`, left: `${x}px`, top: `${y}px` }}
    >
      {label}
    </motion.div>
  );
};

export default function AlgebraTileSimulator() {
  const [tiles, setTiles] = useState([]);

  const addTile = (type) => {
    const newTile = {
      id: uuidv4(),
      type,
      x: 50,
      y: 50,
    };
    setTiles([...tiles, newTile]);
  };

  const handleDragEnd = (id, point) => {
    setTiles(prev =>
      prev.map(tile =>
        tile.id === id ? { ...tile, x: point.x, y: point.y } : tile
      )
    );
  };

  const formatExpression = () => {
    const counts = { x2: 0, x: 0, one: 0 };
    tiles.forEach(tile => counts[tile.type]++);
    let parts = [];
    if (counts.x2) parts.push(`${counts.x2 > 1 ? counts.x2 : ''}x²`);
    if (counts.x) parts.push(`${counts.x > 1 ? counts.x : ''}x`);
    if (counts.one) parts.push(`${counts.one}`);
    return parts.length > 0 ? parts.join(' + ') : '0';
  };

  return (
    <div className="app">
      {/* Palette */}
      <div className="palette">
        <h2 className="palette-title">Palette</h2>
        {Object.keys(TILE_TYPES).map((type) => (
          <div
            key={type}
            className={`palette-button ${TILE_TYPES[type].color}`}
            onClick={() => addTile(type)}
          >
            {TILE_TYPES[type].label}
          </div>
        ))}
      </div>

      {/* Workspace */}
      <div className="workspace">
        {tiles.map(tile => (
          <Tile
            key={tile.id}
            id={tile.id}
            type={tile.type}
            x={tile.x}
            y={tile.y}
            onDragEnd={handleDragEnd}
          />
        ))}
        <div className="footer">
          <strong>Current Total: </strong>{formatExpression()}
        </div>
      </div>
    </div>
  );
}
