import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Html, Text } from '@react-three/drei';

const Book = () => {
  const width = 2.5;   // Book width
  const height = 3.5;  // Book height
  const depth = 0.4;   // Book thickness

  return (
    <Float speed={6} rotationIntensity={0.6} floatIntensity={1}>
      <group>
        {/* Book box */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial
            color="yellow"
            emissive="yellow"
            emissiveIntensity={0.4}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>

        {/* Front Cover Text */}
        <Text
          position={[0, 0.5, depth / 2 + 0.01]} // z = front face
          rotation={[0, 0, 0]}
          fontSize={0.35}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Love
        </Text>
        <Text
          position={[0, -0.2, depth / 2 + 0.01]}
          rotation={[0, 0, 0]}
          fontSize={0.4}
          color="black"
          
          anchorX="center"
          anchorY="middle"
        >
          JavaScript
        </Text>
      </group>
    </Float>
  );
};

const GlowingBook = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 5]} intensity={1} />
      <Suspense fallback={<Html>Loading...</Html>}>
        <Book />
      </Suspense>
    </Canvas>
  );
};

export default GlowingBook;
