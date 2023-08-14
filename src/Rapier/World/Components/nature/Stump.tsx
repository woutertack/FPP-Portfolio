import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import stump from "../assets/nature/stump.gltf";


export function Stump(props: any) {
  const { scene: stumpScene }: any = useGLTF(stump);
  

  return (
    <>
      <RigidBody
        {...props}
        position={new Vector3(-5.2, 0, 7.2)}
        type="fixed"
        colliders="hull"
        scale={0.6}
      >
        <primitive object={stumpScene} />
      </RigidBody>

    </>
  );
}
