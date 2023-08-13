import { Box, Html, Text, useGLTF, useTexture } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { FrontSide, Vector3, Euler, MathUtils } from "three";
import { SOCIALS } from "./configs/Socials.config";
import insta from "./assets/insta.gltf";
import github from "./assets/github.gltf";
import linkedin from "./assets/linkedin.gltf";

const Socials = (props: any) => {
  const { scene: instaScene }: any = useGLTF(insta);
  const { scene: githubScene }: any = useGLTF(github);
  const { scene: linkedinScene }: any = useGLTF(linkedin);

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Text
        position={new Vector3(6, 8, 19)}
        rotation={new Euler(0, MathUtils.degToRad(198), 0)}
        type="fixed"
        fontSize={1.5}
        color={0x000000}
      >
        My socials
      </Text>
      {SOCIALS.map((social, index) => {
        return (
          <>
            {/* linkedin */}
            <RigidBody
              position={new Vector3(11.35, 4, 17)}
              colliders="hull"
              type="fixed"
              rotation={new Euler(0, MathUtils.degToRad(120), -0.1)}
              scale={new Vector3(0.2, 0.4, 0.4)}
            >
              <primitive object={linkedinScene} />
            </RigidBody>
            {/* insta */}
            <RigidBody
              position={new Vector3(8.2, 3.75, 19)}
              colliders="hull"
              type="fixed"
              rotation={new Euler(-0.35, MathUtils.degToRad(180), 0.1)}
            >
              <primitive object={instaScene} />
            </RigidBody>
            {/* github */}
            <RigidBody
              position={new Vector3(0, 4, 20)}
              colliders="hull"
              type="fixed"
              rotation={new Euler(0, MathUtils.degToRad(100), -0.1)}
              scale={new Vector3(0.2, 0.4, 0.4)}
            >
              <primitive object={githubScene} />
            </RigidBody>
            <group key={index}>
              <Text
                position={
                  new Vector3(
                    social.position[0],
                    social.position[1] - 3,
                    social.position[2],
                  )
                }
                rotation={social.rotation}
                type="fixed"
                fontSize={0.5}
                color={0x000000}
                // when you click on the name the link will open in a new tab
                onDoubleClick={() => handleSocialClick(social.url)}
              >
                {social.name}
              </Text>
            </group>
            ;
          </>
        );
      })}
      ;
    </>
  );
};

export { Socials };
