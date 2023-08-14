import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3, Euler, MathUtils } from "three";

import { TREES } from '../configs/Trees.config';

import tree from "../assets/nature/tree.gltf";


export function Tree(props: any) {
  const { nodes, materials }: any = useGLTF(tree);
  

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane_1.geometry} material={materials.green} position={props.position} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials.wood} position={props.position} />
    </group>
  )
}


const Trees = (props:any) => {
  return(
    <group name="trees">
      {TREES.collection.map((el)=>{
        return (
          <RigidBody key={el.id} position={new Vector3(...el.position)} type="fixed">
            <Tree  />
          </RigidBody>
        )
      })}
    </group>
   
  
  )
}

useGLTF.preload(tree)
export { Trees };
