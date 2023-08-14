// Credits cat model: https://free3d.com/3d-model/cat-v1--326682.html
// Credits cat sound: https://mixkit.co/free-sound-effects/cat/


import { Vector3, Euler, MathUtils } from "three/src/Three";
import {  RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import cat from "./assets/cat.gltf";

// Import your sound file
import meow from "./assets/catMeow.wav";

export function Cat(props: any) {
  const { scene: catScene }: any = useGLTF(cat);

  function playSound() {
    new Audio(meow).play();
  }

  return (
    <>
      <mesh onClick={playSound}>
        <RigidBody
          position={new Vector3(6, 0, 6)}
          type="fixed"
          scale={new Vector3(0.5, 0.5, 0.5)}
          rotation={new Euler(0, MathUtils.degToRad(-120), 0)}
        >
          <primitive object={catScene} />
        </RigidBody>
      </mesh>
    </>
  );
}

export default Cat;
