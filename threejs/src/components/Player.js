import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import Soldier from "../model/Soldier.glb";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboard } from "../hooks/useKeyboard";
import { Quaternion, Vector3 } from "three";

export function Player(props) {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboard();
  const vel = useRef([0, 0, 0]);
  const { camera } = useThree();
  const group = useRef();
  const current = useRef("Idle");
  const { nodes, materials, animations } = useGLTF(Soldier);
  const model = nodes.Character;
  const { actions } = useAnimations(animations, group);
  const rotateQuaternion = useRef(new Quaternion());
  const rotateAngle = useRef(new Vector3(0, 1, 0));
  const pos = useRef([0, 0, 0]);

  const getDirectionOffset = () => {
    let directionOffset = 0;
    if (moveForward) {
      if (moveLeft) {
        directionOffset = Math.PI / 4;
      } else if (moveRight) {
        directionOffset = -Math.PI / 4;
      }
    } else if (moveBackward) {
      if (moveLeft) {
        directionOffset = Math.PI / 4 + Math.PI / 2;
      } else if (moveRight) {
        directionOffset = -Math.PI / 4 - Math.PI / 2;
      } else {
        directionOffset = Math.PI;
      }
    } else if (moveLeft) {
      directionOffset = Math.PI / 2;
    } else if (moveRight) {
      directionOffset = -Math.PI / 2;
    }

    return directionOffset;
  };

  const updateCameraTarget = (moveX, moveZ) => {
    // move camera
    camera.position.x += moveX;
    camera.position.z += moveZ;

    // update camera target
    const cameraTarget = new Vector3();
    cameraTarget.x = group.current.position.x;
    cameraTarget.y = group.current.position.y + 1;
    cameraTarget.z = group.current.position.z;
    props.setTarget([cameraTarget.x, cameraTarget.y, cameraTarget.z]);
  };

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

    if (current.current !== play) {
      currentAction.fadeOut(0.2);
      toAction.reset().fadeIn(0.2).play();

      current.current = play;
    }

    if (current.current === "Walk") {
      const angleYCameraDirection = Math.atan2(
        camera.position.x - model.position.x,
        camera.position.z - model.position.z
      );

      const directionOffset = getDirectionOffset();
      rotateQuaternion.current.setFromAxisAngle(
        rotateAngle.current,
        angleYCameraDirection + directionOffset
      );
      // react에선 group의 quaternion에 적용한다.
      group.current.quaternion.rotateTowards(rotateQuaternion.current, 0.2);

      const walkDirection = new Vector3();
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle.current, directionOffset);

      const velocity = 0.05;

      const moveX = walkDirection.x * velocity;
      const moveZ = walkDirection.z * velocity;
      group.current.position.x += moveX;
      group.current.position.z += moveZ;

      console.log(group.current.position.x);
      pos.current = [
        group.current.position.x,
        group.current.position.y,
        group.current.position.z,
      ];

      //updateCameraTarget(moveX, moveZ);
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
