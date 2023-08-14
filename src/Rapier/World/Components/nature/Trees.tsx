import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import tree from "../assets/nature/tree.gltf";
import tree2 from "../assets/nature/tree2.gltf";
import tree3 from "../assets/nature/tree3.gltf";

export function Trees(props: any) {
  const { scene: treeScene }: any = useGLTF(tree);
  const { scene: treeScene2 }: any = useGLTF(tree2);
  const { scene: treeScene3 }: any = useGLTF(tree3);

  return (
    <>
      <RigidBody
        {...props}
        position={new Vector3(-16.6, 0, 9.6)}
        type="fixed"
        scale={new Vector3(1, 1.2, 1)}
      >
        <primitive object={treeScene} />
      </RigidBody>

      <RigidBody
        {...props}
        position={new Vector3(-4.75, 0, -13.8)}
        type="fixed"
        scale={new Vector3(1, 1.2, 1)}
      >
        <primitive object={treeScene2} />
      </RigidBody>
      <RigidBody
        {...props}
        position={new Vector3(16, 0, 6.8)}
        type="fixed"
        scale={new Vector3(1, 1.2, 1)}
      >
        <primitive object={treeScene3} />
      </RigidBody>
    </>
  );
}
