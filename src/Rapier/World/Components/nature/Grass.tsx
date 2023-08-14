import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import grass from "../assets/nature/grass.gltf";


export function Grass(props: any) {
  const { nodes, materials }: any = useGLTF(grass, true);
  
  return (
    <>
    <group {...props} dispose={null}>
      {Array.from({ length: 3000 }, (_, index) => (
      <mesh
        key={index}
        {...props}
        geometry={nodes.Cube.geometry} material={materials.grass}
        position={new Vector3(
          Math.random() * 50 - 25,  
          0,
          Math.random() * 50 - 25 
        )}
        type="fixed"
        scale={Math.random() * 0.7}
      >
      </mesh>
    ))}
    </group>
    </>
  );
}
