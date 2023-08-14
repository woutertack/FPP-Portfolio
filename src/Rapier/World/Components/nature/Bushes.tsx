import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import bush from "../assets/nature/bush.gltf";
import bush2 from "../assets/nature/bush2.gltf";
import bush3 from "../assets/nature/bush3.gltf";
import bush4 from "../assets/nature/bush4.gltf";

export function Bushes(props: any) {
  const { scene: bushScene }: any = useGLTF(bush);
  const { scene: bushScene2 }: any = useGLTF(bush2);
  const { scene: bushScene3 }: any = useGLTF(bush3);
  const { scene: bushScene4 }: any = useGLTF(bush4);

  return (
    <>
      <RigidBody
        {...props}
        position={new Vector3(-8.5, 0.2, -15)}
        type="fixed"
        scale={1.5}
      >
        <primitive object={bushScene} />
      </RigidBody>

      <RigidBody
        {...props}
        position={new Vector3(-0.5, -0.5, -17)}
        type="fixed"
        scale={3.5}
      >
        <primitive object={bushScene2} />
      </RigidBody>

      <RigidBody
        {...props}
        position={new Vector3(14, 0, 13)}
        type="fixed"
        scale={2.5}
      >
        <primitive object={bushScene3} />
      </RigidBody>
      <RigidBody
        {...props}
        position={new Vector3(-18, -0.5, -0.5)}
        type="fixed"
        scale={3.5}
      >
        <primitive object={bushScene4} />
      </RigidBody>
    </>
  );
}
