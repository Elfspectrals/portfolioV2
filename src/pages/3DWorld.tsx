// pages/ThreeDWorld.tsx (or wherever you mount it)
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDImage from '../components/ThreeDImage/ThreeDImage';
import image from '../assets/react.svg';

const shapes: Array<{ shape: 'box' | 'circle' | 'rectangle'; position: [number, number, number] }> = [
  { shape: 'box',       position: [ -2, 0, 0 ] },
  { shape: 'circle',    position: [  0, 0, 0 ] },
  { shape: 'rectangle', position: [  2, 0, 0 ] },
];

const ThreeDWorld: React.FC = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />

      {/* orbit controls for interaction */}
      <OrbitControls enablePan={true} enableZoom={true} />

      {/* inject your meshes */}
      {shapes.map(({ shape, position }, idx) => (
        <ThreeDImage
          key={idx}
          textureImage={image}
          shape={shape}
          position={position}
        />
      ))}
    </Canvas>
  </div>
);

export default ThreeDWorld;
