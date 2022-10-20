import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import Soldier from "../model/Soldier.glb";
import { useFrame } from "@react-three/fiber";
import { useKeyboard } from "../hooks/useKeyboard";

export function Player(props) {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboard();
  const vel = useRef([0, 0, 0]);
  const group = useRef();
  const current = useRef("Idle");
  const { nodes, materials, animations } = useGLTF(Soldier);
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    const directionPressed = [
      moveForward,
      moveBackward,
      moveLeft,
      moveRight,
    ].some((key) => key);

    let play = "";
    let toAction;
    let currentAction;

    if (current.current === "Walk") {
      currentAction = actions.Walk;
    } else {
      currentAction = actions.Idle;
    }

    if (directionPressed) {
      play = "Walk";
      toAction = actions.Walk;
    } else {
      play = "Idle";
      toAction = actions.Idle;
    }

    console.log(current.current, play);
    if (current.current !== play) {
      currentAction.fadeOut(0.2);
      toAction.reset().fadeIn(0.2).play();

      current.current = play;
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group
          name='Character'
          position={[0, -0.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name='vanguard_Mesh'
            geometry={nodes.vanguard_Mesh.geometry}
            material={materials.VanguardBodyMat}
            skeleton={nodes.vanguard_Mesh.skeleton}
          />
          <skinnedMesh
            name='vanguard_visor'
            geometry={nodes.vanguard_visor.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_visor.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Soldier.glb");
