import { CanvasStyle } from "./styles";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const TvModel = (props) => {
  const gltf = useLoader(GLTFLoader, 'assets/retro_tv/scene.gltf');
  return <primitive object={gltf.scene} scale={0.7} {...props} />;
};
const VhsPlayerModel = (props) => {
  const gltf = useLoader(GLTFLoader, 'assets/vhs_player/scene.gltf');
  return <primitive object={gltf.scene} scale={0.13} {...props} />;
};
const VhsModel = (props) => {
  const gltf = useLoader(GLTFLoader, 'assets/vhs/scene.gltf');
  return <primitive object={gltf.scene} scale={5} {...props} />;
};



function Composition() {
  return (
    <CanvasStyle>
      <Canvas>
        <Suspense fallback={null}>
          <TvModel position={[0, -3.5, 0]} />
          <VhsPlayerModel position={[-0.8, 1.082, 0.5]} />
          <VhsModel position={[-1, 1.37, 0]} />
          <OrbitControls />
          <Environment preset="warehouse" background></Environment>
        </Suspense>
        <ambientLight intensity={0.1} />
        <pointLight intensity={0.3} position={[2, 3, 3]}/>
      </Canvas>
    </CanvasStyle>
  );
}

export default Composition;
