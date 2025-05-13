import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene'; // Correct import for named export
import { OrbitControls } from '@react-three/drei';
import * as dat from 'dat.gui';

const ThreeJS = () => {



  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      {/* Passez la scale en prop au composant Scene */}
      <Scene />
    </Canvas>
  );
};

export default ThreeJS;
