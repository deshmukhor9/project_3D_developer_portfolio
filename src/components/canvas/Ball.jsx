import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float 
      speed={isMobile ? 0 : 1.5} // Disable floating on mobile
      rotationIntensity={isMobile ? 0 : 1} // Disable rotation on mobile
      floatIntensity={isMobile ? 0 : 2} // Disable floating movement on mobile
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 2]} />
      <mesh castShadow receiveShadow scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          scale={0.9}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas 
      frameloop="demand" 
      dpr={[1, 2]} 
      gl={{ preserveDrawingBuffer: true }} 
      style={{ touchAction: "auto" }} // Allow normal touch scrolling
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && <OrbitControls enableZoom={false} enableRotate enablePan />}
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
