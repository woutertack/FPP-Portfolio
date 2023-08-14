import { Circle } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";

const PLANE_SIZE = 200;

const RapierWorldFloor = (props: any) => {
  const args = [PLANE_SIZE, PLANE_SIZE] as [number, number];
  const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

  return (
    <>
      <RigidBody type="fixed" friction={1}>
        <MeshCollider type="trimesh">
          <Circle args={args} rotation={rotation} {...props}>
            <meshBasicMaterial color={0x2aa524} />
          </Circle>
        </MeshCollider>
      </RigidBody>
    </>
  );
};

export { RapierWorldFloor };
