import { useState } from "react";
import { Physics } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Cubes } from "./components/Cubes";
import { FPV } from "./components/FPV";
import { Ground } from "./components/Ground";
import { Menu } from "./components/Menu";
import { Player } from "./components/Player";
import { TextureSelector } from "./components/TextureSelector";

function App() {
  const [target, setTarget] = useState([0, 0, 0]);
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5} />
          <PerspectiveCamera makeDefault position={(0, 1, 5)} />
          <OrbitControls target={target} />
          <Physics>
            <Player setTarget={setTarget} />
            <Cubes />
            <Ground />
          </Physics>
        </Suspense>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
