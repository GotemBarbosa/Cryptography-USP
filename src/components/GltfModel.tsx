import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface GltfProps {
  modelPath: string;
  scale?: any;
  position?: Array<number>;
}

const GltfModel = ({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
}: GltfProps) => {
  const ref = useRef<any>();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={(event: any) => hover(true)}
        onPointerOut={(event: any) => hover(false)}
      />
    </>
  );
};

export default GltfModel;
