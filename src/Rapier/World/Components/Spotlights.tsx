import React from "react";
import { Vector3, Euler, MathUtils, Object3D } from "three/src/Three";
import { RigidBody } from "@react-three/rapier";
import { useGLTF, SpotLight } from "@react-three/drei";
import spotlight from "./assets/spotlight.gltf";
import spotlight2 from "./assets/spotlight2.gltf";
import spotlight3 from "./assets/spotlight3.gltf";

export function SpotLights(props: any) {
  const { scene: spotlightScene }: any = useGLTF(spotlight);
  const { scene: spotlightScene2 }: any = useGLTF(spotlight2);
  const { scene: spotlightScene3 }: any = useGLTF(spotlight3);

  // targets for the spotlights
  const targetObj = React.useMemo(() => {
    const obj = new Object3D();
    obj.position.set(10.5, 2, -4);
    obj.updateMatrixWorld();
    return obj;
  }, []);

  const target2Obj = React.useMemo(() => {
    const obj = new Object3D();
    obj.position.set(-16.5, 1, -9.6);
    obj.updateMatrixWorld();
    return obj;
  }, []);

  return (
    <>
      {/* Models of the spotlight */}
      <RigidBody
        position={new Vector3(21, 1.2, -2)}
        type="fixed"
        scale={new Vector3(0.5, 0.5, 0.5)}
        rotation={new Euler(0, MathUtils.degToRad(-18), 0)}
      >
        <primitive object={spotlightScene} />
      </RigidBody>
      <RigidBody
        position={new Vector3(-1.25, 1.2, -10)}
        type="fixed"
        scale={new Vector3(0.5, 0.5, 0.5)}
        rotation={new Euler(0, MathUtils.degToRad(155), 0)}
      >
        <primitive object={spotlightScene2} />
      </RigidBody>
      <RigidBody
        position={new Vector3(-14.05, 0, -1)}
        type="fixed"
        scale={new Vector3(0.5, 0.7, 0.5)}
        rotation={new Euler(0, MathUtils.degToRad(-80), 0)}
      >
        <primitive object={spotlightScene3} />
      </RigidBody>

      {/* Light of the spots itself */}
      {/* spotlight 1 Corner footballfield */}
      <SpotLight
        color={0xaaaa77}
        position={[21, 4.2, -2]}
        distance={20}
        angle={0.75}
        attenuation={10}
        intensity={2}
        target={targetObj}
        anglePower={0.2} // Diffuse-cone anglePower (default: 5)
      />

      {/* spotlight 2 Corner footballfield */}
      <SpotLight
        color={0xaaaa77}
        position={[-1.15, 4.1, -10]}
        distance={20}
        angle={0.75}
        attenuation={10}
        intensity={2}
        target={targetObj}
        anglePower={0.2} // Diffuse-cone anglePower (default: 5)
      />
      {/* spotlight 3 on the works*/}
      <SpotLight
        color={0xcccccc}
        position={[-14, 4.2, -1]}
        distance={20}
        angle={0.85}
        attenuation={15}
        intensity={2}
        target={target2Obj}
        anglePower={0.2} // Diffuse-cone anglePower (default: 5)
      />
    </>
  );
}

export default SpotLights;
