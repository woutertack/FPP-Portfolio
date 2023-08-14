import React, { useState, useEffect, useRef } from "react";
import { Vector3, Euler, MathUtils } from "three/src/Three";
import {  useGLTF, Text } from "@react-three/drei";
import ball from "./assets/ball.gltf";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export function Ball(props: any) {
  const { scene: ballScene }: any = useGLTF(ball);
  const ballRef = useRef<any>(null!);
  const [ballPosition, setBallPosition] = useState<Vector3>(new Vector3());

  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  useFrame(() => {
    const newPosition = ballRef.current.translation();
    setBallPosition(newPosition);

    // Check when a goal is scored for right side
    if (
      newPosition.x >= 14.9 &&
      newPosition.x <= 15.8 &&
      newPosition.z >= -0.3 &&
      newPosition.z <= 1.1
    ) {
      // Reset to original position
      ballRef.current.setTranslation(new Vector3(10, 0.7, -6));
      setRightScore((prevScore) => prevScore + 1);
    }

    // Check when a goal is scored for left side
    if (
      newPosition.x >= 4.3 &&
      newPosition.x <= 5.25 &&
      newPosition.z >= -12.9 &&
      newPosition.z <= -11.6
    ) {
      // Reset to original position
      ballRef.current.setTranslation(new Vector3(10, 0.7, -6));
      setLeftScore((prevScore) => prevScore + 1);
    }
  });

 
  return (
    <>
      <RigidBody
        ref={ballRef}
        position={new Vector3(10, 0.7, -6)}
        colliders="cuboid"
        type="dynamic"
        mass={0.5}
        rotation={new Euler(0, MathUtils.degToRad(120), -0.1)}
      >
        <primitive object={ballScene} />
      </RigidBody>
      <Text
        position={new Vector3(10, 7, -6)}
        rotation={new Euler(0, MathUtils.degToRad(-50), 0)}
        type="fixed"
        fontSize={1.5}
        color={0xFFFFFFF}
      >
        {rightScore} : {leftScore}
      </Text>
    </>
  );
}

export default Ball;
