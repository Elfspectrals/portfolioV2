import React from 'react';
import { Canvas } from '@react-three/fiber';
// import Scene from './Scene';
import { Scene } from './Scene'; // Correct import for named export
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      <Scene />
    </Canvas>
  );
};

export default App;
