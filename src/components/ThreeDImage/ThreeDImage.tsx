// components/ThreeDImage/ThreeDImage.tsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface ThreeDImageProps {
  textureImage: string;
  shape: 'box' | 'circle' | 'rectangle';
  position?: [number, number, number];
}

const ThreeDImage: React.FC<ThreeDImageProps> = ({
  textureImage,
  shape,
  position = [0, 0, 0]
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, textureImage);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
  });

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
  }

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default ThreeDImage;
