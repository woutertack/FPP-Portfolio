
import { Vector3, Euler, MathUtils } from "three/src/Three";
import {  useGLTF } from "@react-three/drei";
import W from "./assets/name/W.gltf";
import O from "./assets/name/O.gltf";
import U from "./assets/name/U.gltf";
import T from "./assets/name/T.gltf";
import E from "./assets/name/E.gltf";
import R from "./assets/name/R.gltf";

import T2 from "./assets/name/T2.gltf";
import A from "./assets/name/A.gltf";
import C from "./assets/name/C.gltf";
import K from "./assets/name/K.gltf";
import { RigidBody } from "@react-three/rapier";

export function NameText(props: any) {
  // first name
  const letterW: any = useGLTF(W);
  const letterO: any = useGLTF(O);
  const letterU: any = useGLTF(U);
  const letterT: any = useGLTF(T);
  const letterE: any = useGLTF(E);
  const letterR: any = useGLTF(R);

  // last name
  const letterT2: any = useGLTF(T2);
  const letterA: any = useGLTF(A);
  const letterC: any = useGLTF(C);
  const letterK: any = useGLTF(K);

  return (
    <>
      <RigidBody
        position={new Vector3(-4, 0, 18)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(140), 0)}
      >
        <primitive object={letterW.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-6, 0, 16.3)}
        colliders="hull"
        type="fixed"
        rotation={new Euler(0, MathUtils.degToRad(140), 0)}
      >
        <primitive object={letterO.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-7.8, 0, 14.8)}
        colliders="hull"
        type="fixed"
        rotation={new Euler(0, MathUtils.degToRad(140), 0)}
      >
        <primitive object={letterU.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-9.4, 0, 13.5)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(140), 0)}
      >
        <primitive object={letterT.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-10.7, 0.05, 12.4)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(140), 0)}
      >
        <primitive object={letterE.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-11.8, 0, 11.5)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(140), 0)}
      >
        <primitive object={letterR.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-13.5, 0, 9.5)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(105), 0)}
      >
        <primitive object={letterT2.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-14, 0, 7.8)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(105), 0)}
      >
        <primitive object={letterA.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-14.5, 0, 6.1)}
        colliders="hull"
        type="fixed"
        rotation={new Euler(0, MathUtils.degToRad(105), 0)}
      >
        <primitive object={letterC.scene} />
      </RigidBody>

      <RigidBody
        position={new Vector3(-15, 0, 4.2)}
        colliders="hull"
        type="dynamic"
        rotation={new Euler(0, MathUtils.degToRad(105), 0)}
      >
        <primitive object={letterK.scene} />
      </RigidBody>
    </>
  );
}

export default NameText;
