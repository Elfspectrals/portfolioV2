// pages/ThreeDWorld.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDImage, { type ThreeDImageProps } from '../components/ThreeDImage/ThreeDImage';

// import your textures (you can add more)
import reactLogo from '../assets/react.svg';
import starbucks from '../assets/starbucks.jpg';
import Chanel from '../assets/Chanel_logo_complet.png';

type ShapeConfig = Omit<ThreeDImageProps, 'position'> & { position: [number, number, number] };

const defaultShapes: ShapeConfig[] = [
  { shape: 'box',       position: [-5, 0, 0], textureImage: Chanel, link: 'https://designer-97084.web.app/' },
  { shape: 'circle',    position: [ 0, 0, 0], textureImage: starbucks, link: 'https://starbuckssimulator.web.app/' },
  { shape: 'rectangle', position: [ 5, 0, 0], textureImage: reactLogo },
];

interface ThreeDWorldProps {
  /** Optionally override or extend the list of shapes */
  shapes?: ShapeConfig[];
}

const ThreeDWorld: React.FC<ThreeDWorldProps> = ({ shapes = defaultShapes }) => (
  <div style={{ width: '100%', height: '80vh' }}>
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={10} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <OrbitControls enablePan enableZoom />
      {shapes.map(({ shape, position, textureImage, link }, i) => (
        <ThreeDImage
          key={i}
          shape={shape}
          position={position}
          textureImage={textureImage}
          link={link} // Pass the link property here
        />
      ))}
    </Canvas>
  </div>
);

export default ThreeDWorld;
