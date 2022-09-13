import { CanvasStyle } from "./styles";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const TvModel = (props) => {
  const gltf = useLoader(GLTFLoader, "assets/retro_tv/scene.gltf");
  return <primitive object={gltf.scene} scale={0.7} {...props} />;
};
const Button = (props) => {
  const ref = useRef();
  const [click, setClick] = useState(0);
  const setClip = () => {
    let tmp = click
    setClick(tmp+=1);
    console.log(click);
  };
  const { nodes, materials } = useGLTF("assets/retro_tv/button.gltf");
  return (
    <group
      {...props}
      scale={0.25}
      ref={ref}
      rotation={[0, 0, click]}
      onClick={(e) => setClip()}
    >
      <mesh geometry={nodes.Cylinder001_Metal_0001.geometry}>
      <meshStandardMaterial
          color={materials['Metal.002'].color}
          normalMap={materials['Metal.002'].normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials['Metal.002'].roughnessMap}
          metalnessMap={materials['Metal.002'].metalnessMap}
          envMapIntensity={0.8}
          map={materials['Metal.002'].map}
          emissive={materials['Metal.002'].emissive}
        />
      </mesh>
      <mesh geometry={nodes.Cylinder001_Plastic_0001.geometry}>
      <meshStandardMaterial
          color={materials['Plastic.002'].color}
          normalMap={materials['Plastic.002'].normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials['Plastic.002'].roughnessMap}
          envMapIntensity={0.8}
          map={materials['Plastic.002'].map}
          emissive={materials['Plastic.002'].emissive}
        />
      </mesh>
    </group>
  );
};
const TVScreenModel = (props) => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "assets/videos/movie.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
  const plane = new THREE.PlaneGeometry(2.45, 1.92);
  return (
    <group {...props}>
      <mesh geometry={plane}>
        <meshStandardMaterial side={THREE.FrontSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

const VhsPlayerModel = (props) => {
  const gltf = useLoader(GLTFLoader, "assets/vhs_player/scene.gltf");
  return <primitive object={gltf.scene} scale={0.13} {...props} />;
};
const VhsModel = (props) => {
  const gltf = useLoader(GLTFLoader, "assets/vhs/scene.gltf");
  return <primitive object={gltf.scene} scale={5} {...props} />;
};

function Composition() {
  return (
    <CanvasStyle>
      <Canvas>
        <Suspense fallback={null}>
          <TvModel position={[0, -3.5, 0]} />
          <TVScreenModel position={[-0.38, -0.3, 0.6]} scale={1} />
          <Button position={[1.3, 0, 0.55]} />
          <VhsPlayerModel position={[-0.8, 1.082, 0.5]} />
          <VhsModel position={[-1, 1.37, 0]} />
          <OrbitControls />
          <Environment preset="warehouse" background></Environment>
        </Suspense>
        <ambientLight intensity={0.1} />
        <pointLight intensity={0.3} position={[2, 3, 3]} />
      </Canvas>
    </CanvasStyle>
  );
}

export default Composition;
