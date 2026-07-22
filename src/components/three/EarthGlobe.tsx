"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Sphere, Float } from "@react-three/drei";

export default function EarthGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  // Create some random points on the sphere to act as "destinations" or "cities"
  const points = useMemo(() => {
    const pts = [];
    const count = 150;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = 2 * Math.cos(theta) * Math.sin(phi);
      const y = 2 * Math.sin(theta) * Math.sin(phi);
      const z = 2 * Math.cos(phi);
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#f59e0b" />

        {/* Main Globe */}
        <Sphere ref={globeRef} args={[2, 64, 64]}>
          <meshPhysicalMaterial
            color="#0a0a0a"
            emissive="#000000"
            roughness={0.4}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.2}
          />
        </Sphere>

        {/* Wireframe outer sphere to give a technical/luxury grid feel */}
        <Sphere args={[2.01, 32, 32]}>
          <meshBasicMaterial
            color="#222222"
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>

        {/* Destination Markers */}
        {points.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial
              color={i % 7 === 0 ? "#f59e0b" : "#444444"}
              transparent
              opacity={i % 7 === 0 ? 0.9 : 0.4}
            />
          </mesh>
        ))}

        {/* Atmosphere / Edge Glow */}
        <Sphere args={[2.2, 64, 64]}>
          <meshBasicMaterial
            color="#f59e0b"
            transparent
            opacity={0.03}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </Sphere>
      </group>
    </Float>
  );
}
