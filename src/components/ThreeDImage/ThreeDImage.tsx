// components/ThreeDImage/ThreeDImage.tsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export interface ThreeDImageProps {
  textureImage: string;
  shape: 'box' | 'circle' | 'rectangle';
  position: [number, number, number];
  link? : string;
}

const ThreeDImage: React.FC<ThreeDImageProps> = ({
  textureImage,
  shape,
  position = [0, 0, 0],
  link = '',
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, textureImage);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank'); // Open the link in a new tab
    }
  };


  let geometry;
  switch (shape) {
    case 'box':
      geometry = <boxGeometry args={[1.5, 1.5, 1.5]} />;
      break;
    case 'circle':
      geometry = <circleGeometry args={[1.5, 32]} />;
      break;
    case 'rectangle':
      geometry = <boxGeometry args={[2, 1, 1]} />;
      break;
    default:
      geometry = <boxGeometry args={[1.5, 1.5, 1.5]} />;
  }

  return (
    <mesh ref={meshRef} position={position} onClick={handleClick}>
      {geometry}
      <meshStandardMaterial map={texture} side={THREE.DoubleSide}/>
    </mesh>
  );
};

export default ThreeDImage;
