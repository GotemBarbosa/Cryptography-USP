import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Davinci";
import { Suspense } from "react";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Suspense fallback={<div>Loading...</div>}>
        <Model />
      </Suspense>
    </>
  );
};

function CanvaModel() {
  return (
    <div className="w-full h-96">
      <Canvas invalidateFrameloop camera={{ position: [2.7, 2.7, 0] }}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
        />
        <ambientLight intensity={10} position={[100, 5, 1]} />
        <directionalLight position={[100, 50, 10]} intensity={10} />
        <directionalLight position={[-100, -100, -50]} intensity={10} />
        <Scene />
      </Canvas>
    </div>
  );
}

export default CanvaModel;
