// Credits dog model: https://market.pmnd.rs/model/dogue
// Credits dog sound: https://mixkit.co/free-sound-effects/dog/


import { Vector3, Euler, MathUtils } from "three/src/Three";
import {  RigidBody } from "@react-three/rapier";
import { useGLTF} from "@react-three/drei";
import dog from "./assets/dog.gltf";

import bark from "./assets/dogBark.wav";

export function Dog(props: any) {
  const { scene: dogScene }: any = useGLTF(dog);
  

  function playSound() {
    new Audio(bark).play();

  }

  return (
    <>
      {/* dog */}
      <mesh onClick={playSound}>
        <RigidBody
          position={new Vector3(7, 0, 4.5)}
          type="fixed"
          scale={new Vector3(0.5, 0.5, 0.5)}
          rotation={new Euler(0, MathUtils.degToRad(-120), 0)}
        >
          <primitive object={dogScene} />
        </RigidBody>
      </mesh>
    </>
  );
}

export default Dog;
