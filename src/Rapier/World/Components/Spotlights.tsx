

import React, { useState, useEffect, useRef } from "react";
import { Vector3, Euler, MathUtils } from "three/src/Three";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import spotlight from "./assets/spotlight.gltf";
import spotlight2 from "./assets/spotlight2.gltf";
import spotlight3 from "./assets/spotlight3.gltf";


export function SpotLights(props: any) {
  const { scene: spotlightScene }: any = useGLTF(spotlight);
  const { scene: spotlightScene2 }: any = useGLTF(spotlight2);
  const { scene: spotlightScene3 }: any = useGLTF(spotlight3);


 

  return (
    <>
    

      <RigidBody
          position={new Vector3(21, 1.2, -2)}
          type="fixed"
          scale={new Vector3(0.5, 0.5, 0.5)}
          rotation={new Euler(0, MathUtils.degToRad(-18), 0)}
        >
          <primitive object={spotlightScene} />
        </RigidBody>
        <RigidBody
          position={new Vector3(-1.25, 1.2, -10)}
          type="fixed"
          scale={new Vector3(0.5, 0.5, 0.5)}
          rotation={new Euler(0, MathUtils.degToRad(155), 0)}
        >
          <primitive object={spotlightScene2} />
        </RigidBody>
        <RigidBody
          position={new Vector3(-14.05, 0, -1)}
          type="fixed"
          scale={new Vector3(0.5, 0.7, 0.5)}
          rotation={new Euler(0, MathUtils.degToRad(-80), 0)}
        >
          <primitive object={spotlightScene3} />
        </RigidBody>
    </>
  );
}


export default SpotLights;
