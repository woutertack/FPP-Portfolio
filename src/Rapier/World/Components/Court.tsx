import React, { useEffect, useRef } from "react";
import { RigidBody, MeshCollider } from "@react-three/rapier";
import {
  Box,
  Html,
  Text,
  useGLTF,
  useTexture,
  Sphere,
} from "@react-three/drei";
import { Vector3, Euler, MathUtils } from "three";

import court from "./assets/court.gltf";
import Ball from "./Ball";

const Court = (props: any) => {
  const courtScene: any = useGLTF(court);

  return (
    <>
    
      <RigidBody
        type="fixed"
        colliders="trimesh"
        position={new Vector3(10, 0.1, -6)}
        rotation={new Euler(0, MathUtils.degToRad(-50), 0)}
        scale={new Vector3(0.8, 0.8, 0.8)}

      >
        <primitive object={courtScene.scene} />
      </RigidBody>
      
     
      <Ball />
    </>
  );
};

export { Court };
