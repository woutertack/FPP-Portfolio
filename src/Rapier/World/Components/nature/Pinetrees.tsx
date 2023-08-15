import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import { PINETREES } from "../configs/Pinetrees.config";

import pinetree from "../assets/nature/pinetree.gltf";

export function Pinetree(props: any) {
  const { nodes, materials }: any = useGLTF(pinetree);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder004_1.geometry}
        material={materials.green}
        position={props.position}
      />
      <mesh
        geometry={nodes.Cylinder004_2.geometry}
        material={materials.wood}
        position={props.position}
      />
    </group>
  );
}

const Pinetrees = (props: any) => {
  return (
    <group name="trees">
      {PINETREES.collection.map((el) => {
        return (
          <RigidBody
            key={el.id}
            position={new Vector3(...el.position)}
            type="fixed"
            scale={0.7}
          >
            <Pinetree />
          </RigidBody>
        );
      })}
    </group>
  );
};

useGLTF.preload(pinetree);
export { Pinetrees };
