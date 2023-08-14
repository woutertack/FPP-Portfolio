import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import grass from "../assets/nature/grass.gltf";


export function Grass(props: any) {
  const { scene: grassScene }: any = useGLTF(grass);
  

  return (
    <>
      <mesh
        {...props}
        position={new Vector3(0, 0, 0)}
        type="fixed"
        scale={1}
      >
        <primitive object={grassScene} />
      </mesh>

    </>
  );
}
