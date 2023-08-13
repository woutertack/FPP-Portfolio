// Credits cat model: https://free3d.com/3d-model/cat-v1--326682.html
// Credits cat sound: https://mixkit.co/free-sound-effects/cat/

import React, { useState, useEffect, useRef } from "react";
import { Vector3, Euler, MathUtils } from "three/src/Three";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { Html, useGLTF, PointerLockControls, Text } from "@react-three/drei";
import mountain from "./assets/mountain.gltf";
import flag from "./assets/flag.gltf";

export function Mountain(props: any) {
  const { scene: mountainScene }: any = useGLTF(mountain);
  const { scene: flagScene }: any = useGLTF(flag);

  return (
    <>
      <mesh
        position={props.position}
        type="fixed"
        scale={new Vector3(50.3, 50.3, 50.3)}
        rotation={new Euler(0, MathUtils.degToRad(-120), 0)}
      >
        <primitive object={mountainScene} />
      </mesh>

      <RigidBody
        position={new Vector3(-4.9, 2, -10.6)}
        colliders="hull"
        type="fixed"
        scale={new Vector3(3.3, 3.3, 3.3)}
        rotation={new Euler(0, MathUtils.degToRad(-120), 0)}
      >
        <primitive object={flagScene} />
      </RigidBody>
    </>
  );
}

export default Mountain;
