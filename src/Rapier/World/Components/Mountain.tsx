// Credits cat model: https://free3d.com/3d-model/cat-v1--326682.html
// Credits cat sound: https://mixkit.co/free-sound-effects/cat/

import { Vector3, Euler, MathUtils } from "three/src/Three";
import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import mountain from "./assets/mountain.gltf";
import flag from "./assets/flag.gltf";

export function Mountain(props: any) {
  const { scene: mountainScene }: any = useGLTF(mountain);
  const { scene: flagScene }: any = useGLTF(flag);

  return (
    <>
      <mesh
        position={new Vector3(-40.5, -0.05, 60.4)}
        type="fixed"
        scale={new Vector3(50, 50, 50)}
        rotation={new Euler(0, MathUtils.degToRad(-120), 0)}
      >
        <primitive object={mountainScene} />
      </mesh>

      <RigidBody
        position={new Vector3(-46, 22, 50.6)}
        colliders="hull"
        type="fixed"
        scale={new Vector3(32, 30, 30)}
        rotation={new Euler(0, MathUtils.degToRad(0), 0)}
      >
        <primitive object={flagScene} />
      </RigidBody>
    </>
  );
}

export default Mountain;
